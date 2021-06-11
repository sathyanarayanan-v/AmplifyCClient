import { ICompany } from '@/interfaces/store/company'
import { IUser } from '@/interfaces/store/user'
export interface IAffiliate {
  user_id: string | IUser
  company_id: string | ICompany
}
export interface IAffiliateState {
  affiliates: Array<IAffiliate>
  selectedAffiliate: IAffiliate
}
