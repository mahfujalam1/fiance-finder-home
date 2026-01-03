export const GENDER_OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
]

export const MARITAL_STATUS_OPTIONS = [
  { label: "Married", value: "married" },
  { label: "Divorced", value: "divorced" },
  { label: "Unmarried", value: "unmarried" },
  { label: "Separated", value: "separated" },
  { label: "Widowed", value: "widowed" },
]

export const RELIGION_OPTIONS = [
  { label: "Muslim", value: "muslim" },
  { label: "Christian", value: "christian" },
  { label: "Buddhist", value: "buddhist" },
  { label: "Hindu", value: "hindu" },
]

export const COUNTRY_OPTIONS = [
  { label: "Bangladesh", value: "bangladesh" },
  { label: "India", value: "india" },
  { label: "USA", value: "usa" },
  { label: "UK", value: "uk" },
  { label: "Canada", value: "canada" },
]

export const PROFILE_FOR_OPTIONS = [
  { label: "Self", value: "self" },
  { label: "Son", value: "son" },
  { label: "Daughter", value: "daughter" },
  { label: "Father", value: "father" },
  { label: "Mother", value: "mother" },
  { label: "Relative", value: "relative" },
  { label: "Friend", value: "friend" },
]

export const CITY_OPTIONS = [
  { label: "Dhaka", value: "dhaka" },
  { label: "Chittagong", value: "chittagong" },
  { label: "Sylhet", value: "sylhet" },
  { label: "Rajshahi", value: "rajshahi" },
  { label: "Khulna", value: "khulna" },
]

export const EDUCATION_OPTIONS = [
  { label: "SSC", value: "ssc" },
  { label: "HSC", value: "hsc" },
  { label: "Graduate", value: "graduate" },
  { label: "Post Graduate", value: "post-graduate" },
  { label: "Doctorate", value: "doctorate" },
  { label: "Uneducated", value: "uneducated" },
]

export const PROFESSION_OPTIONS = [
  { label: "Govt. Job", value: "govt-job" },
  { label: "Private Job", value: "private-job" },
  { label: "Businessman", value: "businessman" },
  { label: "Teacher", value: "teacher" },
  { label: "Unemployed", value: "unemployed" },
]

export const PHONE_CODES = [
  { label: "+880", value: "+880" },
  { label: "+91", value: "+91" },
  { label: "+1", value: "+1" },
  { label: "+44", value: "+44" },
]

export const AGE_RANGE = Array.from({ length: 46 }, (_, i) => ({
  label: (i + 16).toString(),
  value: (i + 16).toString(),
}))

export const HEIGHT_RANGE = [
  { label: "4' 0\"", value: "4-0" },
  { label: "4' 6\"", value: "4-6" },
  { label: "5' 0\"", value: "5-0" },
  { label: "5' 6\"", value: "5-6" },
  { label: "6' 0\"", value: "6-0" },
  { label: "6' 6\"", value: "6-6" },
  { label: "7' 0\"", value: "7-0" },
]
