export interface IUser {
  userUID: string,
  name: string,
  bio: string,
  isOnline: boolean,
  image?: string,
  nick?: string,
  eMail?: string,
  phone?: string,
}

export interface IIconProps {
  className?: string,
  onClick?: () => void,
}