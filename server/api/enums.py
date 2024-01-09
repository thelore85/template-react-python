from enum import Enum


class BookingStatus(Enum):
    Pending = 'Pending'
    Confirmed = 'Confirmed'
    Delated = 'Delated'


class Weekday(Enum):
    Monday = 'Monday'
    Tuesday = 'Tuesday'
    Wednesday = 'Wednesday'
    Thursday = 'Thursday'
    Friday = 'Friday'
    Saturday = 'Saturday'
    Sunday = 'Sunday'


class Boolean(Enum):
    TRUE = True
    FALSE = False


class Specialization(Enum):
    Osteopaty = 'Osteopaty'
    Phisioterapy = 'Phisioterapy'


class VisitType(Enum):
    Center = "Center"
    Phone = "Phone"
    Home = "Home"