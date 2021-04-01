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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
export const syncPatients = /* GraphQL */ `
  query SyncPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
export const syncPharmacies = /* GraphQL */ `
  query SyncPharmacies(
    $filter: ModelPharmacyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPharmacies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
export const syncPharmacists = /* GraphQL */ `
  query SyncPharmacists(
    $filter: ModelPharmacistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPharmacists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
        follow_up_status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFollowUps = /* GraphQL */ `
  query SyncFollowUps(
    $filter: ModelFollowUpFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFollowUps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
export const syncAssessments = /* GraphQL */ `
  query SyncAssessments(
    $filter: ModelAssessmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssessments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        description
        patient_id
        owner_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPrescription = /* GraphQL */ `
  query GetPrescription($id: ID!) {
    getPrescription(id: $id) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPrescriptions = /* GraphQL */ `
  query SyncPrescriptions(
    $filter: ModelPrescriptionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPrescriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        assessment_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPharmacistPharmacies = /* GraphQL */ `
  query SyncPharmacistPharmacies(
    $filter: ModelPharmacistPharmacyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPharmacistPharmacies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pharmacistID
        pharmacyID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
