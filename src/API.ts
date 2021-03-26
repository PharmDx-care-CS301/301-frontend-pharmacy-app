/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePatientInput = {
  id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  postal_code?: string | null,
  dob?: string | null,
  phone_number?: string | null,
  email?: string | null,
  owner_id?: string | null,
};

export type ModelPatientConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  owner_id?: ModelStringInput | null,
  and?: Array< ModelPatientConditionInput | null > | null,
  or?: Array< ModelPatientConditionInput | null > | null,
  not?: ModelPatientConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Patient = {
  __typename: "Patient",
  id?: string,
  first_name?: string | null,
  last_name?: string | null,
  postal_code?: string | null,
  dob?: string | null,
  phone_number?: string | null,
  email?: string | null,
  owner_id?: string | null,
  createdAt?: string,
  updatedAt?: string,
  AssessmentRecord?: ModelAssessmentConnection,
};

export type ModelAssessmentConnection = {
  __typename: "ModelAssessmentConnection",
  items?:  Array<Assessment | null > | null,
  nextToken?: string | null,
};

export type Assessment = {
  __typename: "Assessment",
  id?: string,
  date?: string | null,
  description?: string | null,
  patient_id?: string | null,
  owner_id?: string,
  createdAt?: string,
  updatedAt?: string,
  AssessedFor?: Patient,
  PerformedAt?: Pharmacy,
  AssessedBy?: Pharmacist,
  Prescription?: ModelPrescriptionConnection,
};

export type Pharmacy = {
  __typename: "Pharmacy",
  id?: string,
  address?: string | null,
  name?: string | null,
  pharmacist_ids?: Array< string | null > | null,
  createdAt?: string,
  updatedAt?: string,
  pharmacists?: ModelPharmacistPharmacyConnection,
};

export type ModelPharmacistPharmacyConnection = {
  __typename: "ModelPharmacistPharmacyConnection",
  items?:  Array<PharmacistPharmacy | null > | null,
  nextToken?: string | null,
};

export type PharmacistPharmacy = {
  __typename: "PharmacistPharmacy",
  id?: string,
  pharmacistID?: string,
  pharmacyID?: string,
  createdAt?: string,
  updatedAt?: string,
  pharmacy?: Pharmacy,
  pharmacist?: Pharmacist,
};

export type Pharmacist = {
  __typename: "Pharmacist",
  id?: string,
  first_name?: string | null,
  last_name?: string | null,
  pharmacist_number?: string | null,
  pharmacy_ids?: Array< string | null > | null,
  cognito_id?: string,
  createdAt?: string,
  updatedAt?: string,
  WorksFor?: ModelPharmacistPharmacyConnection,
};

export type ModelPrescriptionConnection = {
  __typename: "ModelPrescriptionConnection",
  items?:  Array<Prescription | null > | null,
  nextToken?: string | null,
};

export type Prescription = {
  __typename: "Prescription",
  id?: string,
  name?: string | null,
  assessment_id?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdatePatientInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  postal_code?: string | null,
  dob?: string | null,
  phone_number?: string | null,
  email?: string | null,
  owner_id?: string | null,
};

export type DeletePatientInput = {
  id?: string | null,
};

export type CreatePharmacyInput = {
  id?: string | null,
  address?: string | null,
  name?: string | null,
  pharmacist_ids?: Array< string | null > | null,
};

export type ModelPharmacyConditionInput = {
  address?: ModelStringInput | null,
  name?: ModelStringInput | null,
  pharmacist_ids?: ModelIDInput | null,
  and?: Array< ModelPharmacyConditionInput | null > | null,
  or?: Array< ModelPharmacyConditionInput | null > | null,
  not?: ModelPharmacyConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePharmacyInput = {
  id: string,
  address?: string | null,
  name?: string | null,
  pharmacist_ids?: Array< string | null > | null,
};

export type DeletePharmacyInput = {
  id?: string | null,
};

export type CreatePharmacistInput = {
  id?: string | null,
  first_name?: string | null,
  last_name?: string | null,
  pharmacist_number?: string | null,
  pharmacy_ids?: Array< string | null > | null,
  cognito_id: string,
};

export type ModelPharmacistConditionInput = {
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  pharmacist_number?: ModelStringInput | null,
  pharmacy_ids?: ModelIDInput | null,
  cognito_id?: ModelStringInput | null,
  and?: Array< ModelPharmacistConditionInput | null > | null,
  or?: Array< ModelPharmacistConditionInput | null > | null,
  not?: ModelPharmacistConditionInput | null,
};

export type UpdatePharmacistInput = {
  id: string,
  first_name?: string | null,
  last_name?: string | null,
  pharmacist_number?: string | null,
  pharmacy_ids?: Array< string | null > | null,
  cognito_id?: string | null,
};

export type DeletePharmacistInput = {
  id?: string | null,
};

export type CreateFollowUpInput = {
  id?: string | null,
  contact_method?: ContactMethod | null,
  assessment_id?: string | null,
  owner_id: string,
  followUpForAssessmentId?: string | null,
};

export enum ContactMethod {
  SMS = "SMS",
  EMAIL = "EMAIL",
  PHARMACY = "PHARMACY",
}


export type ModelFollowUpConditionInput = {
  contact_method?: ModelContactMethodInput | null,
  assessment_id?: ModelIDInput | null,
  owner_id?: ModelStringInput | null,
  and?: Array< ModelFollowUpConditionInput | null > | null,
  or?: Array< ModelFollowUpConditionInput | null > | null,
  not?: ModelFollowUpConditionInput | null,
};

export type ModelContactMethodInput = {
  eq?: ContactMethod | null,
  ne?: ContactMethod | null,
};

export type FollowUp = {
  __typename: "FollowUp",
  id?: string,
  contact_method?: ContactMethod | null,
  assessment_id?: string | null,
  owner_id?: string,
  createdAt?: string,
  updatedAt?: string,
  ForAssessment?: Assessment,
};

export type UpdateFollowUpInput = {
  id: string,
  contact_method?: ContactMethod | null,
  assessment_id?: string | null,
  owner_id?: string | null,
  followUpForAssessmentId?: string | null,
};

export type DeleteFollowUpInput = {
  id?: string | null,
};

export type CreateAssessmentInput = {
  id?: string | null,
  date?: string | null,
  description?: string | null,
  patient_id?: string | null,
  owner_id: string,
  assessmentAssessedById?: string | null,
  assessmentPerformedAtId?: string | null,
  assessmentAssessedForId?: string | null,
};

export type ModelAssessmentConditionInput = {
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  patient_id?: ModelIDInput | null,
  owner_id?: ModelStringInput | null,
  and?: Array< ModelAssessmentConditionInput | null > | null,
  or?: Array< ModelAssessmentConditionInput | null > | null,
  not?: ModelAssessmentConditionInput | null,
};

export type UpdateAssessmentInput = {
  id: string,
  date?: string | null,
  description?: string | null,
  patient_id?: string | null,
  owner_id?: string | null,
  assessmentAssessedById?: string | null,
  assessmentPerformedAtId?: string | null,
  assessmentAssessedForId?: string | null,
};

export type DeleteAssessmentInput = {
  id?: string | null,
};

export type CreatePrescriptionInput = {
  id?: string | null,
  name?: string | null,
  assessment_id?: string | null,
};

export type ModelPrescriptionConditionInput = {
  name?: ModelStringInput | null,
  assessment_id?: ModelIDInput | null,
  and?: Array< ModelPrescriptionConditionInput | null > | null,
  or?: Array< ModelPrescriptionConditionInput | null > | null,
  not?: ModelPrescriptionConditionInput | null,
};

export type UpdatePrescriptionInput = {
  id: string,
  name?: string | null,
  assessment_id?: string | null,
};

export type DeletePrescriptionInput = {
  id?: string | null,
};

export type CreatePharmacistPharmacyInput = {
  id?: string | null,
  pharmacistID: string,
  pharmacyID: string,
};

export type ModelPharmacistPharmacyConditionInput = {
  pharmacistID?: ModelIDInput | null,
  pharmacyID?: ModelIDInput | null,
  and?: Array< ModelPharmacistPharmacyConditionInput | null > | null,
  or?: Array< ModelPharmacistPharmacyConditionInput | null > | null,
  not?: ModelPharmacistPharmacyConditionInput | null,
};

export type UpdatePharmacistPharmacyInput = {
  id: string,
  pharmacistID?: string | null,
  pharmacyID?: string | null,
};

export type DeletePharmacistPharmacyInput = {
  id?: string | null,
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  postal_code?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  phone_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  owner_id?: ModelStringInput | null,
  and?: Array< ModelPatientFilterInput | null > | null,
  or?: Array< ModelPatientFilterInput | null > | null,
  not?: ModelPatientFilterInput | null,
};

export type ModelPatientConnection = {
  __typename: "ModelPatientConnection",
  items?:  Array<Patient | null > | null,
  nextToken?: string | null,
};

export type ModelPharmacyFilterInput = {
  id?: ModelIDInput | null,
  address?: ModelStringInput | null,
  name?: ModelStringInput | null,
  pharmacist_ids?: ModelIDInput | null,
  and?: Array< ModelPharmacyFilterInput | null > | null,
  or?: Array< ModelPharmacyFilterInput | null > | null,
  not?: ModelPharmacyFilterInput | null,
};

export type ModelPharmacyConnection = {
  __typename: "ModelPharmacyConnection",
  items?:  Array<Pharmacy | null > | null,
  nextToken?: string | null,
};

export type ModelPharmacistFilterInput = {
  id?: ModelIDInput | null,
  first_name?: ModelStringInput | null,
  last_name?: ModelStringInput | null,
  pharmacist_number?: ModelStringInput | null,
  pharmacy_ids?: ModelIDInput | null,
  cognito_id?: ModelStringInput | null,
  and?: Array< ModelPharmacistFilterInput | null > | null,
  or?: Array< ModelPharmacistFilterInput | null > | null,
  not?: ModelPharmacistFilterInput | null,
};

export type ModelPharmacistConnection = {
  __typename: "ModelPharmacistConnection",
  items?:  Array<Pharmacist | null > | null,
  nextToken?: string | null,
};

export type ModelFollowUpFilterInput = {
  id?: ModelIDInput | null,
  contact_method?: ModelContactMethodInput | null,
  assessment_id?: ModelIDInput | null,
  owner_id?: ModelStringInput | null,
  and?: Array< ModelFollowUpFilterInput | null > | null,
  or?: Array< ModelFollowUpFilterInput | null > | null,
  not?: ModelFollowUpFilterInput | null,
};

export type ModelFollowUpConnection = {
  __typename: "ModelFollowUpConnection",
  items?:  Array<FollowUp | null > | null,
  nextToken?: string | null,
};

export type ModelAssessmentFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  description?: ModelStringInput | null,
  patient_id?: ModelIDInput | null,
  owner_id?: ModelStringInput | null,
  and?: Array< ModelAssessmentFilterInput | null > | null,
  or?: Array< ModelAssessmentFilterInput | null > | null,
  not?: ModelAssessmentFilterInput | null,
};

export type ModelPrescriptionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  assessment_id?: ModelIDInput | null,
  and?: Array< ModelPrescriptionFilterInput | null > | null,
  or?: Array< ModelPrescriptionFilterInput | null > | null,
  not?: ModelPrescriptionFilterInput | null,
};

export type CreatePatientMutationVariables = {
  input?: CreatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type CreatePatientMutation = {
  createPatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    postal_code?: string | null,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    owner_id?: string | null,
    createdAt: string,
    updatedAt: string,
    AssessmentRecord?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePatientMutationVariables = {
  input?: UpdatePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type UpdatePatientMutation = {
  updatePatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    postal_code?: string | null,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    owner_id?: string | null,
    createdAt: string,
    updatedAt: string,
    AssessmentRecord?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePatientMutationVariables = {
  input?: DeletePatientInput,
  condition?: ModelPatientConditionInput | null,
};

export type DeletePatientMutation = {
  deletePatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    postal_code?: string | null,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    owner_id?: string | null,
    createdAt: string,
    updatedAt: string,
    AssessmentRecord?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePharmacyMutationVariables = {
  input?: CreatePharmacyInput,
  condition?: ModelPharmacyConditionInput | null,
};

export type CreatePharmacyMutation = {
  createPharmacy?:  {
    __typename: "Pharmacy",
    id: string,
    address?: string | null,
    name?: string | null,
    pharmacist_ids?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    pharmacists?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePharmacyMutationVariables = {
  input?: UpdatePharmacyInput,
  condition?: ModelPharmacyConditionInput | null,
};

export type UpdatePharmacyMutation = {
  updatePharmacy?:  {
    __typename: "Pharmacy",
    id: string,
    address?: string | null,
    name?: string | null,
    pharmacist_ids?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    pharmacists?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePharmacyMutationVariables = {
  input?: DeletePharmacyInput,
  condition?: ModelPharmacyConditionInput | null,
};

export type DeletePharmacyMutation = {
  deletePharmacy?:  {
    __typename: "Pharmacy",
    id: string,
    address?: string | null,
    name?: string | null,
    pharmacist_ids?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    pharmacists?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePharmacistMutationVariables = {
  input?: CreatePharmacistInput,
  condition?: ModelPharmacistConditionInput | null,
};

export type CreatePharmacistMutation = {
  createPharmacist?:  {
    __typename: "Pharmacist",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    pharmacist_number?: string | null,
    pharmacy_ids?: Array< string | null > | null,
    cognito_id: string,
    createdAt: string,
    updatedAt: string,
    WorksFor?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdatePharmacistMutationVariables = {
  input?: UpdatePharmacistInput,
  condition?: ModelPharmacistConditionInput | null,
};

export type UpdatePharmacistMutation = {
  updatePharmacist?:  {
    __typename: "Pharmacist",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    pharmacist_number?: string | null,
    pharmacy_ids?: Array< string | null > | null,
    cognito_id: string,
    createdAt: string,
    updatedAt: string,
    WorksFor?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeletePharmacistMutationVariables = {
  input?: DeletePharmacistInput,
  condition?: ModelPharmacistConditionInput | null,
};

export type DeletePharmacistMutation = {
  deletePharmacist?:  {
    __typename: "Pharmacist",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    pharmacist_number?: string | null,
    pharmacy_ids?: Array< string | null > | null,
    cognito_id: string,
    createdAt: string,
    updatedAt: string,
    WorksFor?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateFollowUpMutationVariables = {
  input?: CreateFollowUpInput,
  condition?: ModelFollowUpConditionInput | null,
};

export type CreateFollowUpMutation = {
  createFollowUp?:  {
    __typename: "FollowUp",
    id: string,
    contact_method?: ContactMethod | null,
    assessment_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    ForAssessment?:  {
      __typename: "Assessment",
      id: string,
      date?: string | null,
      description?: string | null,
      patient_id?: string | null,
      owner_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateFollowUpMutationVariables = {
  input?: UpdateFollowUpInput,
  condition?: ModelFollowUpConditionInput | null,
};

export type UpdateFollowUpMutation = {
  updateFollowUp?:  {
    __typename: "FollowUp",
    id: string,
    contact_method?: ContactMethod | null,
    assessment_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    ForAssessment?:  {
      __typename: "Assessment",
      id: string,
      date?: string | null,
      description?: string | null,
      patient_id?: string | null,
      owner_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteFollowUpMutationVariables = {
  input?: DeleteFollowUpInput,
  condition?: ModelFollowUpConditionInput | null,
};

export type DeleteFollowUpMutation = {
  deleteFollowUp?:  {
    __typename: "FollowUp",
    id: string,
    contact_method?: ContactMethod | null,
    assessment_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    ForAssessment?:  {
      __typename: "Assessment",
      id: string,
      date?: string | null,
      description?: string | null,
      patient_id?: string | null,
      owner_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateAssessmentMutationVariables = {
  input?: CreateAssessmentInput,
  condition?: ModelAssessmentConditionInput | null,
};

export type CreateAssessmentMutation = {
  createAssessment?:  {
    __typename: "Assessment",
    id: string,
    date?: string | null,
    description?: string | null,
    patient_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    AssessedFor?:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      postal_code?: string | null,
      dob?: string | null,
      phone_number?: string | null,
      email?: string | null,
      owner_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    PerformedAt?:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    AssessedBy?:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateAssessmentMutationVariables = {
  input?: UpdateAssessmentInput,
  condition?: ModelAssessmentConditionInput | null,
};

export type UpdateAssessmentMutation = {
  updateAssessment?:  {
    __typename: "Assessment",
    id: string,
    date?: string | null,
    description?: string | null,
    patient_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    AssessedFor?:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      postal_code?: string | null,
      dob?: string | null,
      phone_number?: string | null,
      email?: string | null,
      owner_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    PerformedAt?:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    AssessedBy?:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteAssessmentMutationVariables = {
  input?: DeleteAssessmentInput,
  condition?: ModelAssessmentConditionInput | null,
};

export type DeleteAssessmentMutation = {
  deleteAssessment?:  {
    __typename: "Assessment",
    id: string,
    date?: string | null,
    description?: string | null,
    patient_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    AssessedFor?:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      postal_code?: string | null,
      dob?: string | null,
      phone_number?: string | null,
      email?: string | null,
      owner_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    PerformedAt?:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    AssessedBy?:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreatePrescriptionMutationVariables = {
  input?: CreatePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type CreatePrescriptionMutation = {
  createPrescription?:  {
    __typename: "Prescription",
    id: string,
    name?: string | null,
    assessment_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePrescriptionMutationVariables = {
  input?: UpdatePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type UpdatePrescriptionMutation = {
  updatePrescription?:  {
    __typename: "Prescription",
    id: string,
    name?: string | null,
    assessment_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePrescriptionMutationVariables = {
  input?: DeletePrescriptionInput,
  condition?: ModelPrescriptionConditionInput | null,
};

export type DeletePrescriptionMutation = {
  deletePrescription?:  {
    __typename: "Prescription",
    id: string,
    name?: string | null,
    assessment_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePharmacistPharmacyMutationVariables = {
  input?: CreatePharmacistPharmacyInput,
  condition?: ModelPharmacistPharmacyConditionInput | null,
};

export type CreatePharmacistPharmacyMutation = {
  createPharmacistPharmacy?:  {
    __typename: "PharmacistPharmacy",
    id: string,
    pharmacistID: string,
    pharmacyID: string,
    createdAt: string,
    updatedAt: string,
    pharmacy:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    pharmacist:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdatePharmacistPharmacyMutationVariables = {
  input?: UpdatePharmacistPharmacyInput,
  condition?: ModelPharmacistPharmacyConditionInput | null,
};

export type UpdatePharmacistPharmacyMutation = {
  updatePharmacistPharmacy?:  {
    __typename: "PharmacistPharmacy",
    id: string,
    pharmacistID: string,
    pharmacyID: string,
    createdAt: string,
    updatedAt: string,
    pharmacy:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    pharmacist:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeletePharmacistPharmacyMutationVariables = {
  input?: DeletePharmacistPharmacyInput,
  condition?: ModelPharmacistPharmacyConditionInput | null,
};

export type DeletePharmacistPharmacyMutation = {
  deletePharmacistPharmacy?:  {
    __typename: "PharmacistPharmacy",
    id: string,
    pharmacistID: string,
    pharmacyID: string,
    createdAt: string,
    updatedAt: string,
    pharmacy:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    pharmacist:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type ListPatientsQueryVariables = {
  filter?: ModelPatientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPatientsQuery = {
  listPatients?:  {
    __typename: "ModelPatientConnection",
    items?:  Array< {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      postal_code?: string | null,
      dob?: string | null,
      phone_number?: string | null,
      email?: string | null,
      owner_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPatientQueryVariables = {
  id?: string,
};

export type GetPatientQuery = {
  getPatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    postal_code?: string | null,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    owner_id?: string | null,
    createdAt: string,
    updatedAt: string,
    AssessmentRecord?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPharmacysQueryVariables = {
  filter?: ModelPharmacyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPharmacysQuery = {
  listPharmacys?:  {
    __typename: "ModelPharmacyConnection",
    items?:  Array< {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPharmacyQueryVariables = {
  id?: string,
};

export type GetPharmacyQuery = {
  getPharmacy?:  {
    __typename: "Pharmacy",
    id: string,
    address?: string | null,
    name?: string | null,
    pharmacist_ids?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    pharmacists?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListPharmacistsQueryVariables = {
  filter?: ModelPharmacistFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPharmacistsQuery = {
  listPharmacists?:  {
    __typename: "ModelPharmacistConnection",
    items?:  Array< {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPharmacistQueryVariables = {
  id?: string,
};

export type GetPharmacistQuery = {
  getPharmacist?:  {
    __typename: "Pharmacist",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    pharmacist_number?: string | null,
    pharmacy_ids?: Array< string | null > | null,
    cognito_id: string,
    createdAt: string,
    updatedAt: string,
    WorksFor?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetFollowUpQueryVariables = {
  id?: string,
};

export type GetFollowUpQuery = {
  getFollowUp?:  {
    __typename: "FollowUp",
    id: string,
    contact_method?: ContactMethod | null,
    assessment_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    ForAssessment?:  {
      __typename: "Assessment",
      id: string,
      date?: string | null,
      description?: string | null,
      patient_id?: string | null,
      owner_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListFollowUpsQueryVariables = {
  filter?: ModelFollowUpFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFollowUpsQuery = {
  listFollowUps?:  {
    __typename: "ModelFollowUpConnection",
    items?:  Array< {
      __typename: "FollowUp",
      id: string,
      contact_method?: ContactMethod | null,
      assessment_id?: string | null,
      owner_id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAssessmentsQueryVariables = {
  filter?: ModelAssessmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAssessmentsQuery = {
  listAssessments?:  {
    __typename: "ModelAssessmentConnection",
    items?:  Array< {
      __typename: "Assessment",
      id: string,
      date?: string | null,
      description?: string | null,
      patient_id?: string | null,
      owner_id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAssessmentQueryVariables = {
  id?: string,
};

export type GetAssessmentQuery = {
  getAssessment?:  {
    __typename: "Assessment",
    id: string,
    date?: string | null,
    description?: string | null,
    patient_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    AssessedFor?:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      postal_code?: string | null,
      dob?: string | null,
      phone_number?: string | null,
      email?: string | null,
      owner_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    PerformedAt?:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    AssessedBy?:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetPrescriptionQueryVariables = {
  id?: string,
};

export type GetPrescriptionQuery = {
  getPrescription?:  {
    __typename: "Prescription",
    id: string,
    name?: string | null,
    assessment_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPrescriptionsQueryVariables = {
  filter?: ModelPrescriptionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPrescriptionsQuery = {
  listPrescriptions?:  {
    __typename: "ModelPrescriptionConnection",
    items?:  Array< {
      __typename: "Prescription",
      id: string,
      name?: string | null,
      assessment_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePatientSubscription = {
  onCreatePatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    postal_code?: string | null,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    owner_id?: string | null,
    createdAt: string,
    updatedAt: string,
    AssessmentRecord?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePatientSubscription = {
  onUpdatePatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    postal_code?: string | null,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    owner_id?: string | null,
    createdAt: string,
    updatedAt: string,
    AssessmentRecord?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePatientSubscription = {
  onDeletePatient?:  {
    __typename: "Patient",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    postal_code?: string | null,
    dob?: string | null,
    phone_number?: string | null,
    email?: string | null,
    owner_id?: string | null,
    createdAt: string,
    updatedAt: string,
    AssessmentRecord?:  {
      __typename: "ModelAssessmentConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePharmacySubscription = {
  onCreatePharmacy?:  {
    __typename: "Pharmacy",
    id: string,
    address?: string | null,
    name?: string | null,
    pharmacist_ids?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    pharmacists?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePharmacySubscription = {
  onUpdatePharmacy?:  {
    __typename: "Pharmacy",
    id: string,
    address?: string | null,
    name?: string | null,
    pharmacist_ids?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    pharmacists?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePharmacySubscription = {
  onDeletePharmacy?:  {
    __typename: "Pharmacy",
    id: string,
    address?: string | null,
    name?: string | null,
    pharmacist_ids?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
    pharmacists?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePharmacistSubscription = {
  onCreatePharmacist?:  {
    __typename: "Pharmacist",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    pharmacist_number?: string | null,
    pharmacy_ids?: Array< string | null > | null,
    cognito_id: string,
    createdAt: string,
    updatedAt: string,
    WorksFor?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdatePharmacistSubscription = {
  onUpdatePharmacist?:  {
    __typename: "Pharmacist",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    pharmacist_number?: string | null,
    pharmacy_ids?: Array< string | null > | null,
    cognito_id: string,
    createdAt: string,
    updatedAt: string,
    WorksFor?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeletePharmacistSubscription = {
  onDeletePharmacist?:  {
    __typename: "Pharmacist",
    id: string,
    first_name?: string | null,
    last_name?: string | null,
    pharmacist_number?: string | null,
    pharmacy_ids?: Array< string | null > | null,
    cognito_id: string,
    createdAt: string,
    updatedAt: string,
    WorksFor?:  {
      __typename: "ModelPharmacistPharmacyConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateFollowUpSubscription = {
  onCreateFollowUp?:  {
    __typename: "FollowUp",
    id: string,
    contact_method?: ContactMethod | null,
    assessment_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    ForAssessment?:  {
      __typename: "Assessment",
      id: string,
      date?: string | null,
      description?: string | null,
      patient_id?: string | null,
      owner_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateFollowUpSubscription = {
  onUpdateFollowUp?:  {
    __typename: "FollowUp",
    id: string,
    contact_method?: ContactMethod | null,
    assessment_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    ForAssessment?:  {
      __typename: "Assessment",
      id: string,
      date?: string | null,
      description?: string | null,
      patient_id?: string | null,
      owner_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteFollowUpSubscription = {
  onDeleteFollowUp?:  {
    __typename: "FollowUp",
    id: string,
    contact_method?: ContactMethod | null,
    assessment_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    ForAssessment?:  {
      __typename: "Assessment",
      id: string,
      date?: string | null,
      description?: string | null,
      patient_id?: string | null,
      owner_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateAssessmentSubscription = {
  onCreateAssessment?:  {
    __typename: "Assessment",
    id: string,
    date?: string | null,
    description?: string | null,
    patient_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    AssessedFor?:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      postal_code?: string | null,
      dob?: string | null,
      phone_number?: string | null,
      email?: string | null,
      owner_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    PerformedAt?:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    AssessedBy?:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateAssessmentSubscription = {
  onUpdateAssessment?:  {
    __typename: "Assessment",
    id: string,
    date?: string | null,
    description?: string | null,
    patient_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    AssessedFor?:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      postal_code?: string | null,
      dob?: string | null,
      phone_number?: string | null,
      email?: string | null,
      owner_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    PerformedAt?:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    AssessedBy?:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteAssessmentSubscription = {
  onDeleteAssessment?:  {
    __typename: "Assessment",
    id: string,
    date?: string | null,
    description?: string | null,
    patient_id?: string | null,
    owner_id: string,
    createdAt: string,
    updatedAt: string,
    AssessedFor?:  {
      __typename: "Patient",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      postal_code?: string | null,
      dob?: string | null,
      phone_number?: string | null,
      email?: string | null,
      owner_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    PerformedAt?:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    AssessedBy?:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    Prescription?:  {
      __typename: "ModelPrescriptionConnection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreatePrescriptionSubscription = {
  onCreatePrescription?:  {
    __typename: "Prescription",
    id: string,
    name?: string | null,
    assessment_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePrescriptionSubscription = {
  onUpdatePrescription?:  {
    __typename: "Prescription",
    id: string,
    name?: string | null,
    assessment_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePrescriptionSubscription = {
  onDeletePrescription?:  {
    __typename: "Prescription",
    id: string,
    name?: string | null,
    assessment_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePharmacistPharmacySubscription = {
  onCreatePharmacistPharmacy?:  {
    __typename: "PharmacistPharmacy",
    id: string,
    pharmacistID: string,
    pharmacyID: string,
    createdAt: string,
    updatedAt: string,
    pharmacy:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    pharmacist:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdatePharmacistPharmacySubscription = {
  onUpdatePharmacistPharmacy?:  {
    __typename: "PharmacistPharmacy",
    id: string,
    pharmacistID: string,
    pharmacyID: string,
    createdAt: string,
    updatedAt: string,
    pharmacy:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    pharmacist:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeletePharmacistPharmacySubscription = {
  onDeletePharmacistPharmacy?:  {
    __typename: "PharmacistPharmacy",
    id: string,
    pharmacistID: string,
    pharmacyID: string,
    createdAt: string,
    updatedAt: string,
    pharmacy:  {
      __typename: "Pharmacy",
      id: string,
      address?: string | null,
      name?: string | null,
      pharmacist_ids?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    },
    pharmacist:  {
      __typename: "Pharmacist",
      id: string,
      first_name?: string | null,
      last_name?: string | null,
      pharmacist_number?: string | null,
      pharmacy_ids?: Array< string | null > | null,
      cognito_id: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};
