/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient {
    onCreatePatient {
      id
      first_name
      last_name
      postal_code
      dob
      phone_number
      email
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient {
    onUpdatePatient {
      id
      first_name
      last_name
      postal_code
      dob
      phone_number
      email
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient {
    onDeletePatient {
      id
      first_name
      last_name
      postal_code
      dob
      phone_number
      email
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
export const onCreatePharmacy = /* GraphQL */ `
  subscription OnCreatePharmacy {
    onCreatePharmacy {
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
export const onUpdatePharmacy = /* GraphQL */ `
  subscription OnUpdatePharmacy {
    onUpdatePharmacy {
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
export const onDeletePharmacy = /* GraphQL */ `
  subscription OnDeletePharmacy {
    onDeletePharmacy {
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
export const onCreatePharmacist = /* GraphQL */ `
  subscription OnCreatePharmacist {
    onCreatePharmacist {
      id
      first_name
      last_name
      pharmacist_number
      pharmacist_ids
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
export const onUpdatePharmacist = /* GraphQL */ `
  subscription OnUpdatePharmacist {
    onUpdatePharmacist {
      id
      first_name
      last_name
      pharmacist_number
      pharmacist_ids
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
export const onDeletePharmacist = /* GraphQL */ `
  subscription OnDeletePharmacist {
    onDeletePharmacist {
      id
      first_name
      last_name
      pharmacist_number
      pharmacist_ids
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
export const onCreateFollowUp = /* GraphQL */ `
  subscription OnCreateFollowUp {
    onCreateFollowUp {
      id
      contact_method
      assessment_id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ForAssessment {
        id
        date
        description
        pharmacist_id
        patient_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateFollowUp = /* GraphQL */ `
  subscription OnUpdateFollowUp {
    onUpdateFollowUp {
      id
      contact_method
      assessment_id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ForAssessment {
        id
        date
        description
        pharmacist_id
        patient_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteFollowUp = /* GraphQL */ `
  subscription OnDeleteFollowUp {
    onDeleteFollowUp {
      id
      contact_method
      assessment_id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ForAssessment {
        id
        date
        description
        pharmacist_id
        patient_id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateAssessment = /* GraphQL */ `
  subscription OnCreateAssessment {
    onCreateAssessment {
      id
      date
      description
      pharmacist_id
      patient_id
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
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      FollowUp {
        id
        contact_method
        assessment_id
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
export const onUpdateAssessment = /* GraphQL */ `
  subscription OnUpdateAssessment {
    onUpdateAssessment {
      id
      date
      description
      pharmacist_id
      patient_id
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
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      FollowUp {
        id
        contact_method
        assessment_id
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
export const onDeleteAssessment = /* GraphQL */ `
  subscription OnDeleteAssessment {
    onDeleteAssessment {
      id
      date
      description
      pharmacist_id
      patient_id
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
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      FollowUp {
        id
        contact_method
        assessment_id
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
export const onCreatePrescription = /* GraphQL */ `
  subscription OnCreatePrescription {
    onCreatePrescription {
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
export const onUpdatePrescription = /* GraphQL */ `
  subscription OnUpdatePrescription {
    onUpdatePrescription {
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
export const onDeletePrescription = /* GraphQL */ `
  subscription OnDeletePrescription {
    onDeletePrescription {
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
export const onCreatePharmacistPharmacy = /* GraphQL */ `
  subscription OnCreatePharmacistPharmacy {
    onCreatePharmacistPharmacy {
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
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdatePharmacistPharmacy = /* GraphQL */ `
  subscription OnUpdatePharmacistPharmacy {
    onUpdatePharmacistPharmacy {
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
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeletePharmacistPharmacy = /* GraphQL */ `
  subscription OnDeletePharmacistPharmacy {
    onDeletePharmacistPharmacy {
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
        pharmacist_ids
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
