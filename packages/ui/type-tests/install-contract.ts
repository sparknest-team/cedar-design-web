import { Button, Carousel, Checkbox, Form, Input, Menu, Radio, Tabs } from '@cedar-design/ui-vue'
import { Input as InputEntry } from '@cedar-design/ui-vue/input'
import { Tabs as TabsEntry } from '@cedar-design/ui-vue/tabs'

Button.setPropsDefaults({})
Input.setPropsDefaults({})
Tabs.setPropsDefaults({})
void [Input.Password, Input.Group, Input.GroupLabel, Carousel.Item, Checkbox.Group, Menu.Option, Radio.Group]
void [Tabs.TabPane, Tabs.TabNav, Tabs.TabsNavs, Tabs.TabItem, Tabs.TabsItems, Form.Item]
const input: typeof Input = InputEntry
const tabs: typeof Tabs = TabsEntry
declare const instance: InstanceType<typeof Input>
instance.focus()
instance.blur()
void [input, tabs]
