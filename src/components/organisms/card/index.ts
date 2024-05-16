import Card, { CardProps } from './card'

export type ICard = (props: CardProps) => JSX.Element

const C: ICard = Card

export default C
