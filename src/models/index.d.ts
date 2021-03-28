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



export declare class Patient {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly postal_code?: string;
  readonly dob?: string;
  readonly phone_number?: string;
  readonly email?: string;
  readonly AssessmentRecord?: (Assessment | null)[];
  readonly owner_id?: string;
  constructor(init: ModelInit<Patient>);
  static copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
}

export declare class Assessment {
  readonly id: string;
  readonly date?: string;
  readonly description?: string;
  readonly patient_id?: string;
  readonly Prescription?: (Prescription | null)[];
  readonly AssessedBy?: Pharmacist;
  readonly PerformedAt?: Pharmacy;
  readonly AssessedFor?: Patient;
  readonly owner_id: string;
  constructor(init: ModelInit<Assessment>);
  static copyOf(source: Assessment, mutator: (draft: MutableModel<Assessment>) => MutableModel<Assessment> | void): Assessment;
}

export declare class Prescription {
  readonly id: string;
  readonly name?: string;
  readonly assessment_id?: string;
  constructor(init: ModelInit<Prescription>);
  static copyOf(source: Prescription, mutator: (draft: MutableModel<Prescription>) => MutableModel<Prescription> | void): Prescription;
}

export declare class Pharmacist {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly pharmacist_number?: string;
  readonly pharmacy_ids?: (string | null)[];
  readonly WorksFor?: (PharmacistPharmacy | null)[];
  readonly cognito_id: string;
  constructor(init: ModelInit<Pharmacist>);
  static copyOf(source: Pharmacist, mutator: (draft: MutableModel<Pharmacist>) => MutableModel<Pharmacist> | void): Pharmacist;
}

export declare class PharmacistPharmacy {
  readonly id: string;
  readonly pharmacist: Pharmacist;
  readonly pharmacy: Pharmacy;
  constructor(init: ModelInit<PharmacistPharmacy>);
  static copyOf(source: PharmacistPharmacy, mutator: (draft: MutableModel<PharmacistPharmacy>) => MutableModel<PharmacistPharmacy> | void): PharmacistPharmacy;
}

export declare class Pharmacy {
  readonly id: string;
  readonly address?: string;
  readonly name?: string;
  readonly pharmacist_ids?: (string | null)[];
  readonly pharmacists?: (PharmacistPharmacy | null)[];
  constructor(init: ModelInit<Pharmacy>);
  static copyOf(source: Pharmacy, mutator: (draft: MutableModel<Pharmacy>) => MutableModel<Pharmacy> | void): Pharmacy;
}

export declare class FollowUp {
  readonly id: string;
  readonly contact_method?: ContactMethod | keyof typeof ContactMethod;
  readonly assessment_id?: string;
  readonly ForAssessment?: Assessment;
  readonly owner_id: string;
  readonly follow_up_status?: FollowUpStatus | keyof typeof FollowUpStatus;
  constructor(init: ModelInit<FollowUp>);
  static copyOf(source: FollowUp, mutator: (draft: MutableModel<FollowUp>) => MutableModel<FollowUp> | void): FollowUp;
}