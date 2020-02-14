export const DATE_TIME_API_FORMAT = 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]';

export const SERVICE_BILLING_TYPE = {
  FIXED: 'FIXED',
  TIME_BASED: 'TIME_BASED',
};

export const PROJECT_STATUS = {
  STARTED: 'STARTED',
  CLOSED: 'CLOSED',
};

export const PROJECT_SERVICE_RULES_TYPE = {
  PROJECT_ENDS: 'PROJECT_ENDS',
  PROJECT_STARTS: 'PROJECT_STARTS',
};

export const TIMESHEET_STATUS = {
  APPROVED: 'APPROVED',
  DRAFT: 'DRAFT',
  FINALISED: 'FINALISED',
  INVOICED: 'INVOICED',
};

export const INVOICE_STATUS = {
  APPROVED: 'APPROVED',
  ARCHIVED: 'ARCHIVED',
  DRAFT: 'DRAFT',
  FULLY_PAID: 'FULLY_PAID',
  UNPAID: 'UNPAID',
  PARTIALLY_PAID: 'PARTIALLY_PAID',
  PROPOSED: 'PROPOSED',
  REJECTED: 'REJECTED',
};

export const INVOICE_TYPE = {
  PROJECT: 'PROJECT',
  TIMESHEET: 'TIMESHEET',
  TIMESHEET_WITH_DETAILS: 'TIMESHEET_WITH_DETAILS',
  FREE_TEXT: 'FREE_TEXT',
};