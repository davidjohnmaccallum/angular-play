export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
}
export interface ContactList {
  contacts: Contact[];
  pageIndex: number;
  pageSize: number;
  totalCount: number;
}
