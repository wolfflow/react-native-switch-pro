declare module 'react-native-switch-pro' {
  import * as React from 'react'
  import {ViewStyle} from 'react-native'

  export interface SwitchProps {
    width?: number
    height?: number
    value?: boolean
    disabled?: boolean
    circleColorActive?: string
    circleColorInactive?: string
    style?: ViewStyle[]
    circleStyle?: ViewStyle[]
    backgroundActive?: string
    backgroundInactive?: string
    onSyncPress?: (value: boolean) => void
    onAsyncPress?: () => void
  }

  const Switch: React.FC<SwitchProps> = () => {}
  export default Switch
}
