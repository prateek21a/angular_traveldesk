export interface User {
    id: number;
    email: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    password: string;
    contactNumber: string;
    roleId: number;
    departmentId: number;
    managerId?: number;
    createdBy: string;
    createdDate: string;
    modifiedBy?: string;
    modifiedDate?: string;
    isActive: boolean;
  }
  