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

const { Survey, FollowUp, Assessment, Prescription, Pharmacist, PharmacistPharmacy, Pharmacy, Patient } = initSchema(schema);

export {
  Survey,
  FollowUp,
  Assessment,
  Prescription,
  Pharmacist,
  PharmacistPharmacy,
  Pharmacy,
  Patient,
  ContactMethod,
  FollowUpStatus
};