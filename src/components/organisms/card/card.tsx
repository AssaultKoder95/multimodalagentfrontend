import { forwardRef, ComponentProps } from 'react'

import styles from './card.module.css'

export interface CardProps
  extends Omit<ComponentProps<'div'>, 'className' | 'children'> {
  title: string
  description: string
  type: 'listing' | 'feature'
  Icon: (props: ComponentProps<'svg'>) => JSX.Element
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, Icon, type, ...rest }, ref) => {
    return (
      <div ref={ref} className={type === 'listing' ? styles.listing_card : styles.feature_card} {...rest}>
        <div>
          <span className={styles.iconContainer}>
            <Icon className={type === 'listing' ? styles.listing_icon : styles.feature_icon} aria-hidden="true" />
          </span>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={type === 'listing' ? styles.listing_desc : styles.feature_desc}>{description}</p>
        </div>
      </div>
    )
  }
)

export default Card
