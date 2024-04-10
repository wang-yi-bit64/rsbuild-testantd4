import {forwardRef, useImperativeHandle, useMemo} from "react"
import { Col, Row, Form } from "antd"

export const formItemLayout = {
	labelCol: {
		xs: 24,
		md: 8,
		sm: 8,
	},
	wrapperCol: {
		xs: 24,
		md: 16,
		sm: 16,
	},
	style: {
		marginBottom: 5,
	},
}

const {Item} = Form


export function useColProps(row = 3) {
	return {
		xs: 24,
		sm: 12,
		md: 12,
		lg: 24 / row,
		xl: 24 / row,
	}
}

export const UseItem = ({row = 3, children, ...rest}) =>
	(<Col {...useColProps(row)}><Item {...rest}>{children}</Item></Col>)
const UseFilter = forwardRef(({
    dataSource, row = 3, children, size = "default",
    ...rest
}, ref) => {
    const [form] = Form.useForm()

    useImperativeHandle(ref, () => ({
		...form
	}))
	const colProps = {
		xs: 24,
		sm: 12,
		md: 12,
		lg: 24 / row,
		xl: 24 / row,
	}
	return (
		<Form form={form} {...formItemLayout} style={{margin: "10px 0"}} size={size} {...rest}>
			<Row>
				{dataSource.map(item => (
					<Col
                        key={item.name}
						style={item.colStyleProps}
						{...colProps}
					>
						<Item
							name={item.name}
							required={useMemo(() => item.required, [item.required])}
							label={
								useMemo(() => item.label, [item.label])
							}
							labelAlign={item.labelAlign || "right"}
							colon={item.colon}
							labelCol={item.labelCol || formItemLayout.labelCol}
							wrapperCol={item.wrapperCol || formItemLayout.wrapperCol}
							{...item.itemProps}
                            {...item.options}
						>
                           {item.children}
						</Item>
					</Col>
				))}
			</Row>
			{
				children
			}
		</Form>
	)
})

export default UseFilter
