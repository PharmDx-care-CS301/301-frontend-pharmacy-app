/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
      id
      first_name
      last_name
      postal_code
      dob
      phone_number
      email
      owner_id
      createdAt
      updatedAt
      AssessmentRecord {
        nextToken
      }
    }
  }
`;
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
      id
      first_name
      last_name
      postal_code
      dob
      phone_number
      email
      owner_id
      createdAt
      updatedAt
      AssessmentRecord {
        nextToken
      }
    }
  }
`;
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
      id
      first_name
      last_name
      postal_code
      dob
      phone_number
      email
      owner_id
      createdAt
      updatedAt
      AssessmentRecord {
        nextToken
      }
    }
  }
`;
export const createPharmacy = /* GraphQL */ `
  mutation CreatePharmacy(
    $input: CreatePharmacyInput!
    $condition: ModelPharmacyConditionInput
  ) {
    createPharmacy(input: $input, condition: $condition) {
      id
      address
      name
      pharmacist_ids
      createdAt
      updatedAt
      pharmacists {
        nextToken
      }
    }
  }
`;
export const updatePharmacy = /* GraphQL */ `
  mutation UpdatePharmacy(
    $input: UpdatePharmacyInput!
    $condition: ModelPharmacyConditionInput
  ) {
    updatePharmacy(input: $input, condition: $condition) {
      id
      address
      name
      pharmacist_ids
      createdAt
      updatedAt
      pharmacists {
        nextToken
      }
    }
  }
`;
export const deletePharmacy = /* GraphQL */ `
  mutation DeletePharmacy(
    $input: DeletePharmacyInput!
    $condition: ModelPharmacyConditionInput
  ) {
    deletePharmacy(input: $input, condition: $condition) {
      id
      address
      name
      pharmacist_ids
      createdAt
      updatedAt
      pharmacists {
        nextToken
      }
    }
  }
`;
export const createPharmacist = /* GraphQL */ `
  mutation CreatePharmacist(
    $input: CreatePharmacistInput!
    $condition: ModelPharmacistConditionInput
  ) {
    createPharmacist(input: $input, condition: $condition) {
      id
      first_name
      last_name
      pharmacist_number
      pharmacy_ids
      cognito_id
      createdAt
      updatedAt
      WorksFor {
        nextToken
      }
    }
  }
`;
export const updatePharmacist = /* GraphQL */ `
  mutation UpdatePharmacist(
    $input: UpdatePharmacistInput!
    $condition: ModelPharmacistConditionInput
  ) {
    updatePharmacist(input: $input, condition: $condition) {
      id
      first_name
      last_name
      pharmacist_number
      pharmacy_ids
      cognito_id
      createdAt
      updatedAt
      WorksFor {
        nextToken
      }
    }
  }
`;
export const deletePharmacist = /* GraphQL */ `
  mutation DeletePharmacist(
    $input: DeletePharmacistInput!
    $condition: ModelPharmacistConditionInput
  ) {
    deletePharmacist(input: $input, condition: $condition) {
      id
      first_name
      last_name
      pharmacist_number
      pharmacy_ids
      cognito_id
      createdAt
      updatedAt
      WorksFor {
        nextToken
      }
    }
  }
`;
export const createFollowUp = /* GraphQL */ `
  mutation CreateFollowUp(
    $input: CreateFollowUpInput!
    $condition: ModelFollowUpConditionInput
  ) {
    createFollowUp(input: $input, condition: $condition) {
      id
      contact_method
      assessment_id
      owner_id
      createdAt
      updatedAt
      ForAssessment {
        id
        date
        description
        patient_id
        owner_id
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateFollowUp = /* GraphQL */ `
  mutation UpdateFollowUp(
    $input: UpdateFollowUpInput!
    $condition: ModelFollowUpConditionInput
  ) {
    updateFollowUp(input: $input, condition: $condition) {
      id
      contact_method
      assessment_id
      owner_id
      createdAt
      updatedAt
      ForAssessment {
        id
        date
        description
        patient_id
        owner_id
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteFollowUp = /* GraphQL */ `
  mutation DeleteFollowUp(
    $input: DeleteFollowUpInput!
    $condition: ModelFollowUpConditionInput
  ) {
    deleteFollowUp(input: $input, condition: $condition) {
      id
      contact_method
      assessment_id
      owner_id
      createdAt
      updatedAt
      ForAssessment {
        id
        date
        description
        patient_id
        owner_id
        createdAt
        updatedAt
      }
    }
  }
`;
export const createAssessment = /* GraphQL */ `
  mutation CreateAssessment(
    $input: CreateAssessmentInput!
    $condition: ModelAssessmentConditionInput
  ) {
    createAssessment(input: $input, condition: $condition) {
      id
      date
      description
      patient_id
      owner_id
      createdAt
      updatedAt
      AssessedFor {
        id
        first_name
        last_name
        postal_code
        dob
        phone_number
        email
        owner_id
        createdAt
        updatedAt
      }
      PerformedAt {
        id
        address
        name
        pharmacist_ids
        createdAt
        updatedAt
      }
      AssessedBy {
        id
        first_name
        last_name
        pharmacist_number
        pharmacy_ids
        cognito_id
        createdAt
        updatedAt
      }
      Prescription {
        nextToken
      }
    }
  }
`;
export const updateAssessment = /* GraphQL */ `
  mutation UpdateAssessment(
    $input: UpdateAssessmentInput!
    $condition: ModelAssessmentConditionInput
  ) {
    updateAssessment(input: $input, condition: $condition) {
      id
      date
      description
      patient_id
      owner_id
      createdAt
      updatedAt
      AssessedFor {
        id
        first_name
        last_name
        postal_code
        dob
        phone_number
        email
        owner_id
        createdAt
        updatedAt
      }
      PerformedAt {
        id
        address
        name
        pharmacist_ids
        createdAt
        updatedAt
      }
      AssessedBy {
        id
        first_name
        last_name
        pharmacist_number
        pharmacy_ids
        cognito_id
        createdAt
        updatedAt
      }
      Prescription {
        nextToken
      }
    }
  }
`;
export const deleteAssessment = /* GraphQL */ `
  mutation DeleteAssessment(
    $input: DeleteAssessmentInput!
    $condition: ModelAssessmentConditionInput
  ) {
    deleteAssessment(input: $input, condition: $condition) {
      id
      date
      description
      patient_id
      owner_id
      createdAt
      updatedAt
      AssessedFor {
        id
        first_name
        last_name
        postal_code
        dob
        phone_number
        email
        owner_id
        createdAt
        updatedAt
      }
      PerformedAt {
        id
        address
        name
        pharmacist_ids
        createdAt
        updatedAt
      }
      AssessedBy {
        id
        first_name
        last_name
        pharmacist_number
        pharmacy_ids
        cognito_id
        createdAt
        updatedAt
      }
      Prescription {
        nextToken
      }
    }
  }
`;
export const createPrescription = /* GraphQL */ `
  mutation CreatePrescription(
    $input: CreatePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    createPrescription(input: $input, condition: $condition) {
      id
      name
      assessment_id
      createdAt
      updatedAt
    }
  }
`;
export const updatePrescription = /* GraphQL */ `
  mutation UpdatePrescription(
    $input: UpdatePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    updatePrescription(input: $input, condition: $condition) {
      id
      name
      assessment_id
      createdAt
      updatedAt
    }
  }
`;
export const deletePrescription = /* GraphQL */ `
  mutation DeletePrescription(
    $input: DeletePrescriptionInput!
    $condition: ModelPrescriptionConditionInput
  ) {
    deletePrescription(input: $input, condition: $condition) {
      id
      name
      assessment_id
      createdAt
      updatedAt
    }
  }
`;
export const createPharmacistPharmacy = /* GraphQL */ `
  mutation CreatePharmacistPharmacy(
    $input: CreatePharmacistPharmacyInput!
    $condition: ModelPharmacistPharmacyConditionInput
  ) {
    createPharmacistPharmacy(input: $input, condition: $condition) {
      id
      pharmacistID
      pharmacyID
      createdAt
      updatedAt
      pharmacy {
        id
        address
        name
        pharmacist_ids
        createdAt
        updatedAt
      }
      pharmacist {
        id
        first_name
        last_name
        pharmacist_number
        pharmacy_ids
        cognito_id
        createdAt
        updatedAt
      }
    }
  }
`;
export const updatePharmacistPharmacy = /* GraphQL */ `
  mutation UpdatePharmacistPharmacy(
    $input: UpdatePharmacistPharmacyInput!
    $condition: ModelPharmacistPharmacyConditionInput
  ) {
    updatePharmacistPharmacy(input: $input, condition: $condition) {
      id
      pharmacistID
      pharmacyID
      createdAt
      updatedAt
      pharmacy {
        id
        address
        name
        pharmacist_ids
        createdAt
        updatedAt
      }
      pharmacist {
        id
        first_name
        last_name
        pharmacist_number
        pharmacy_ids
        cognito_id
        createdAt
        updatedAt
      }
    }
  }
`;
export const deletePharmacistPharmacy = /* GraphQL */ `
  mutation DeletePharmacistPharmacy(
    $input: DeletePharmacistPharmacyInput!
    $condition: ModelPharmacistPharmacyConditionInput
  ) {
    deletePharmacistPharmacy(input: $input, condition: $condition) {
      id
      pharmacistID
      pharmacyID
      createdAt
      updatedAt
      pharmacy {
        id
        address
        name
        pharmacist_ids
        createdAt
        updatedAt
      }
      pharmacist {
        id
        first_name
        last_name
        pharmacist_number
        pharmacy_ids
        cognito_id
        createdAt
        updatedAt
      }
    }
  }
`;
