/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSurvey = /* GraphQL */ `
  mutation CreateSurvey(
    $input: CreateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    createSurvey(input: $input, condition: $condition) {
      id
      phone_number
      link_id
      survey_data
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FollowUp {
        id
        contact_method
        assessment_id
        owner_id
        follow_up_status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateSurvey = /* GraphQL */ `
  mutation UpdateSurvey(
    $input: UpdateSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    updateSurvey(input: $input, condition: $condition) {
      id
      phone_number
      link_id
      survey_data
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FollowUp {
        id
        contact_method
        assessment_id
        owner_id
        follow_up_status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteSurvey = /* GraphQL */ `
  mutation DeleteSurvey(
    $input: DeleteSurveyInput!
    $condition: ModelSurveyConditionInput
  ) {
    deleteSurvey(input: $input, condition: $condition) {
      id
      phone_number
      link_id
      survey_data
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      FollowUp {
        id
        contact_method
        assessment_id
        owner_id
        follow_up_status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AssessmentRecord {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AssessmentRecord {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      AssessmentRecord {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      pharmacists {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      pharmacists {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      pharmacists {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      WorksFor {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      WorksFor {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      WorksFor {
        nextToken
        startedAt
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
      follow_up_status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ForAssessment {
        id
        date
        description
        patient_id
        owner_id
        scheduled_date
        _version
        _deleted
        _lastChangedAt
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
      follow_up_status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ForAssessment {
        id
        date
        description
        patient_id
        owner_id
        scheduled_date
        _version
        _deleted
        _lastChangedAt
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
      follow_up_status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ForAssessment {
        id
        date
        description
        patient_id
        owner_id
        scheduled_date
        _version
        _deleted
        _lastChangedAt
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
      scheduled_date
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      PerformedAt {
        id
        address
        name
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Prescription {
        nextToken
        startedAt
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
      scheduled_date
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      PerformedAt {
        id
        address
        name
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Prescription {
        nextToken
        startedAt
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
      scheduled_date
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      PerformedAt {
        id
        address
        name
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Prescription {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      pharmacy {
        id
        address
        name
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      pharmacy {
        id
        address
        name
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      pharmacy {
        id
        address
        name
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
