import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ContactMethod {
  SMS = "SMS",
  EMAIL = "EMAIL",
  PHARMACY = "PHARMACY"
}

export enum FollowUpStatus {
  COMPLETED = "COMPLETED",
  PENDINGRESPONSE = "PENDINGRESPONSE",
  TODO = "TODO",
  NOFOLLOWUPNEEDED = "NOFOLLOWUPNEEDED",
  RESPONSEOVERDUE = "RESPONSEOVERDUE",
  FOLLOWUPREQUESTED = "FOLLOWUPREQUESTED"
}



export declare class Prescription {
  readonly id: string;
  readonly name?: string;
  readonly assessment_id?: string;
  constructor(init: ModelInit<Prescription>);
  static copyOf(source: Prescription, mutator: (draft: MutableModel<Prescription>) => MutableModel<Prescription> | void): Prescription;
}

export declare class Assessment {
  readonly id: string;
  readonly date?: string;
  readonly description?: string;
  readonly Prescription?: (Prescription | null)[];
  readonly AssessedBy?: Pharmacist;
  readonly PerformedAt?: Pharmacy;
  readonly AssessedFor?: Patient;
  readonly FollowUp?: FollowUp;
  readonly patient_id?: string;
  readonly pharmacist_id?: string;
  constructor(init: ModelInit<Assessment>);
  static copyOf(source: Assessment, mutator: (draft: MutableModel<Assessment>) => MutableModel<Assessment> | void): Assessment;
}

export declare class Pharmacist {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly pharmacist_number?: string;
  readonly pharmacys?: (PharmacyPharmacist | null)[];
  readonly pharmacy_ids?: (string | null)[];
  constructor(init: ModelInit<Pharmacist>);
  static copyOf(source: Pharmacist, mutator: (draft: MutableModel<Pharmacist>) => MutableModel<Pharmacist> | void): Pharmacist;
}

export declare class PharmacyPharmacist {
  readonly id: string;
  readonly pharmacy: Pharmacy;
  readonly pharmacist: Pharmacist;
  constructor(init: ModelInit<PharmacyPharmacist>);
  static copyOf(source: PharmacyPharmacist, mutator: (draft: MutableModel<PharmacyPharmacist>) => MutableModel<PharmacyPharmacist> | void): PharmacyPharmacist;
}

export declare class Pharmacy {
  readonly id: string;
  readonly address?: string;
  readonly name?: string;
  readonly PharmacyPharmacists?: (PharmacyPharmacist | null)[];
  readonly pharmacist_ids?: (string | null)[];
  constructor(init: ModelInit<Pharmacy>);
  static copyOf(source: Pharmacy, mutator: (draft: MutableModel<Pharmacy>) => MutableModel<Pharmacy> | void): Pharmacy;
}

export declare class Patient {
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly phone_number?: string;
  readonly email?: string;
  readonly postal_code?: string;
  readonly dob: string;
  readonly AssessmentRecord?: (Assessment | null)[];
  constructor(init: ModelInit<Patient>);
  static copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
}

export declare class FollowUp {
  readonly id: string;
  readonly contact_method?: ContactMethod | keyof typeof ContactMethod;
  readonly ForAssessment?: Assessment;
  readonly assessment_id?: string;
  constructor(init: ModelInit<FollowUp>);
  static copyOf(source: FollowUp, mutator: (draft: MutableModel<FollowUp>) => MutableModel<FollowUp> | void): FollowUp;
}