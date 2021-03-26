/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
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
export const listPharmacys = /* GraphQL */ `
  query ListPharmacys(
    $filter: ModelPharmacyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPharmacys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        address
        name
        pharmacist_ids
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPharmacy = /* GraphQL */ `
  query GetPharmacy($id: ID!) {
    getPharmacy(id: $id) {
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
export const listPharmacists = /* GraphQL */ `
  query ListPharmacists(
    $filter: ModelPharmacistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPharmacists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        pharmacist_number
        pharmacy_ids
        cognito_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPharmacist = /* GraphQL */ `
  query GetPharmacist($id: ID!) {
    getPharmacist(id: $id) {
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
export const getFollowUp = /* GraphQL */ `
  query GetFollowUp($id: ID!) {
    getFollowUp(id: $id) {
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
export const listFollowUps = /* GraphQL */ `
  query ListFollowUps(
    $filter: ModelFollowUpFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowUps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contact_method
        assessment_id
        owner_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAssessments = /* GraphQL */ `
  query ListAssessments(
    $filter: ModelAssessmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssessments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        description
        patient_id
        owner_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAssessment = /* GraphQL */ `
  query GetAssessment($id: ID!) {
    getAssessment(id: $id) {
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
export const getPrescription = /* GraphQL */ `
  query GetPrescription($id: ID!) {
    getPrescription(id: $id) {
      id
      name
      assessment_id
      createdAt
      updatedAt
    }
  }
`;
export const listPrescriptions = /* GraphQL */ `
  query ListPrescriptions(
    $filter: ModelPrescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        assessment_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
