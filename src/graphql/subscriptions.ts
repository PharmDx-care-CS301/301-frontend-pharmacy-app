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
      owner_id
      createdAt
      updatedAt
      AssessmentRecord {
        nextToken
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
      owner_id
      createdAt
      updatedAt
      AssessmentRecord {
        nextToken
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
      owner_id
      createdAt
      updatedAt
      AssessmentRecord {
        nextToken
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
      createdAt
      updatedAt
      pharmacists {
        nextToken
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
      createdAt
      updatedAt
      pharmacists {
        nextToken
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
      createdAt
      updatedAt
      pharmacists {
        nextToken
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
export const onUpdatePharmacist = /* GraphQL */ `
  subscription OnUpdatePharmacist {
    onUpdatePharmacist {
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
export const onDeletePharmacist = /* GraphQL */ `
  subscription OnDeletePharmacist {
    onDeletePharmacist {
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
export const onCreateFollowUp = /* GraphQL */ `
  subscription OnCreateFollowUp {
    onCreateFollowUp {
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
export const onUpdateFollowUp = /* GraphQL */ `
  subscription OnUpdateFollowUp {
    onUpdateFollowUp {
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
export const onDeleteFollowUp = /* GraphQL */ `
  subscription OnDeleteFollowUp {
    onDeleteFollowUp {
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
export const onCreateAssessment = /* GraphQL */ `
  subscription OnCreateAssessment {
    onCreateAssessment {
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
export const onUpdateAssessment = /* GraphQL */ `
  subscription OnUpdateAssessment {
    onUpdateAssessment {
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
export const onDeleteAssessment = /* GraphQL */ `
  subscription OnDeleteAssessment {
    onDeleteAssessment {
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
export const onCreatePrescription = /* GraphQL */ `
  subscription OnCreatePrescription {
    onCreatePrescription {
      id
      name
      assessment_id
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
export const onUpdatePharmacistPharmacy = /* GraphQL */ `
  subscription OnUpdatePharmacistPharmacy {
    onUpdatePharmacistPharmacy {
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
export const onDeletePharmacistPharmacy = /* GraphQL */ `
  subscription OnDeletePharmacistPharmacy {
    onDeletePharmacistPharmacy {
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
