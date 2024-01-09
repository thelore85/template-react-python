from api.model import db, Pro, ProAgenda, Holiday, ProAvailability
from datetime import datetime, timedelta
import holidays
from api.enums import BookingStatus, Weekday, Boolean, Specialization, VisitType


# Copia qui la funzione get_enum_values
def get_enum_values(enum_class):
    return [enum.value for enum in enum_class]

# Copia qui la funzione get_all_enums
def get_all_enums():
    enums_list = [
        {"name": "BookingStatus", "values": get_enum_values(BookingStatus)},
        {"name": "Weekday", "values": get_enum_values(Weekday)},
        {"name": "Boolean", "values": get_enum_values(Boolean)},
        {"name": "Specialization", "values": get_enum_values(Specialization)},
        {"name": "VisitType", "values": get_enum_values(VisitType)}
    ]

    return enums_list


# Update the function to create default availabilities for each active service
def create_pro_service_availabilities(pro_id):
    # Get a list of active services for the professional
    active_services = ProService.query.filter_by(pro_id=pro_id).all()

    # Define working days
    weekdays = [Weekday.MONDAY, Weekday.TUESDAY, Weekday.WEDNESDAY, Weekday.THURSDAY, Weekday.FRIDAY]

    # Iterate over each active service
    for service in active_services:
        # Iterate over working days
        for weekday in weekdays:
            # Create a ProServiceAvailability object for each working day and service
            pro_service_availability = ProServiceAvailability(
                day_of_week=weekday.value,
                start_time="09:00",
                end_time="18:00",
                pro_id=pro_id,
                pro_service_id=service.id
            )

            # Add the ProServiceAvailability object to the database
            db.session.add(pro_service_availability)

    # Commit to save the changes to the database
    db.session.commit()


# When a new pro is created, prepare the holiday table with country holidays
def create_pro_holidays(pro_id, country):
    # Check if the country is supported
    if country not in holidays.Countries():
        raise ValueError(f"Country {country} not supported by the 'holidays' library.")

    # Instance of holidays for the specified country
    country_holidays = holidays.CountryHoliday(country)

    # Retrieve holidays for the current year
    year = datetime.now().year
    holidays_list = country_holidays(year)

    # Add holidays to the ProHoliday table for the professional
    for date, name in sorted(holidays_list.items()):
        pro_holiday = ProHoliday(
            pro_id=pro_id,
            start_time=date,
            country=country,
            name=name
        )
        db.session.add(pro_holiday)

    # Commit to save the changes to the database
    db.session.commit()



def get_available_dates_with_slots(pro_id, selected_service_id):

    # Get pro availability
    pro_availabilities = ProServiceAvailability.query.filter_by(pro_id=pro_id, pro_service_id=selected_service_id).all()

    # Get pro holiday
    pro_holidays = ProHoliday.query.filter_by(pro_id=pro_id).all()

    # Get pro booking
    pro_bookings = Booking.query.filter_by(pro_id=pro_id).all()

    # Define date range for booking (30 DAYS)
    start_date = datetime.now().date() + timedelta(days=1)
    end_date = start_date + timedelta(days=30)


    available_dates_with_slots = []

    # Loop through the date range
    current_date = start_date
    while current_date <= end_date:
        # Check if date is on holiday
        is_holiday = any(holiday.date == current_date for holiday in pro_holidays)

        # Check if date is fully booked
        fully_booked = any(
            (booking.start_time.date() == current_date and booking.end_time.date() == current_date)
            for booking in pro_bookings
        )

        # Check if there are specific time slots booked on this date
        time_slots_booked = any(
            (
                booking.start_time.date() == current_date
                and booking.end_time.date() == current_date
                and booking.start_time is not None
                and booking.end_time is not None
            )
            for booking in pro_bookings
        )

        # Check if date is available
        is_available = any(
            (availability.working_day == current_date.weekday() and availability.full_day)
            or (
                availability.working_day == current_date.weekday()
                and not availability.full_day
                and not time_slots_booked
            )
            for availability in pro_availabilities
        )

        # If not holiday, available, and not fully booked, add to the list
        if not is_holiday and is_available and not fully_booked:
            # Get available time slots for the date
            available_slots = [
                {"start_time": booking.start_time.strftime("%H:%M"),
                 "end_time": booking.end_time.strftime("%H:%M")}
                for booking in pro_bookings
                if (
                    booking.start_time.date() == current_date
                    and booking.end_time.date() == current_date
                    and booking.start_time is not None
                    and booking.end_time is not None
                )
            ]
            available_dates_with_slots.append({"date": current_date, "slots": available_slots})

        # Iterate to the next date
        current_date += timedelta(days=1)

    return available_dates_with_slots
