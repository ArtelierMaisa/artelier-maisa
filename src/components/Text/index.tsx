import { TextProps, sizes, weights } from '../../@types'

export function Text(props: TextProps) {
  const { type, color, size, toCenter } = props
  return <p className={
    `${weights[type]} ${sizes[size]} ${toCenter ? 'text-center' : '#252527'}`
  }
    style={{ color }}
  >
    {props.children}
  </p>
}