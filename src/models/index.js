// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContactMethod = {
  "SMS": "SMS",
  "EMAIL": "EMAIL",
  "PHARMACY": "PHARMACY"
};

const FollowUpStatus = {
  "COMPLETED": "COMPLETED",
  "PENDINGRESPONSE": "PENDINGRESPONSE",
  "TODO": "TODO",
  "NOFOLLOWUPNEEDED": "NOFOLLOWUPNEEDED",
  "RESPONSEOVERDUE": "RESPONSEOVERDUE",
  "FOLLOWUPREQUESTED": "FOLLOWUPREQUESTED"
};

const { Prescription, Assessment, Pharmacist, PharmacyPharmacist, Pharmacy, Patient, FollowUp } = initSchema(schema);

export {
  Prescription,
  Assessment,
  Pharmacist,
  PharmacyPharmacist,
  Pharmacy,
  Patient,
  FollowUp,
  ContactMethod,
  FollowUpStatus
};