export const RoleSelectOptions = [
  { label: "admin", value: "admin" },
  { label: "user", value: "user" },
  { label: "parents", value: "parents" },
  { label: "tutor", value: "tutor" },
];

export const categoryOptions = [
  {
    label: "Academic",
    value: "Academic",
  },
  {
    label: "SoftSkill",
    value: "SoftSkill",
  },

  {
    label: "Religious",
    value: "Religious",
  },
];

enum ServiceStatus {
  available = "available",
  notAvailable = "notAvailable",
  upComing = "upComing",
}

export const statusOptions = [
  {
    label: ServiceStatus.available,
    value: ServiceStatus.available,
  },
  {
    label: ServiceStatus.notAvailable,
    value: ServiceStatus.notAvailable,
  },

  {
    label: ServiceStatus.upComing,
    value: ServiceStatus.upComing,
  },
];

export const tuitionMediumSelectOptions = [
  { label: "English", value: "English" },
  { label: "Bangla", value: "Bangla" },
  { label: "Madrasha", value: "Madrasha" },
];
export const classNameSelectOptions = [
  { label: "class-1", value: "class-1" },
  { label: "class-2", value: "class-2" },
  { label: "class-3", value: "class-3" },
  { label: "class-4", value: "class-4" },
  { label: "class-5", value: "class-5" },
  { label: "class-6", value: "class-6" },
  { label: "class-7", value: "class-7" },
  { label: "class-8", value: "class-8" },
  { label: "class-9", value: "class-9" },
  { label: "class-10", value: "class-10" },
  { label: "inter 1st year", value: "inter 1st year" },
  { label: "inter 2nd year", value: "inter 2nd year" },
];
export const genderSelectOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "MaleOrFemale", value: "MaleOrFemale" },
];
export const daysSelectOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
  { label: "6", value: "6" },
  { label: "7", value: "7" },
];
export const tuitionTypeSelectOptions = [
  { label: "Home", value: "Home" },
  { label: "Online", value: "Online" },
];
