import moment from 'moment'

export const cn = (...classNames) => classNames.filter(Boolean).join(' ')

export const noop = () => {}

export const timeSince = (date: Date): string => moment(date).fromNow()
