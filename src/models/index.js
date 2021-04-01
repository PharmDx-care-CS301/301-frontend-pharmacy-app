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

const { Patient, Assessment, Prescription, Pharmacist, PharmacistPharmacy, Pharmacy, FollowUp } = initSchema(schema);

export {
  Patient,
  Assessment,
  Prescription,
  Pharmacist,
  PharmacistPharmacy,
  Pharmacy,
  FollowUp,
  ContactMethod,
  FollowUpStatus
};