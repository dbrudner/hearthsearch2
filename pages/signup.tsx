import { Form, Input, Button, Icon } from "antd";
import { Formik } from "formik";
import {
	formItemLayout,
	buttonItemLayout
} from "../features/common/form-layout";
import Link from "next/link";

const FormItem = Form.Item;

export default () => (
	<div>
		<h2>Sign up</h2>
		<Formik
			initialValues={{
				username: "",
				email: "",
				password: ""
			}}
			onSubmit={values => {
				const body = JSON.stringify(values);
				fetch("./signup", {
					method: "POST",
					credentials: "same-origin",
					headers: {
						"Content-Type": "application/json; charset=utf-8"
					},
					body
				});
			}}
			render={({ values, handleChange, handleSubmit }) => (
				<Form method="post" onSubmit={handleSubmit}>
					<FormItem {...formItemLayout} label="Username">
						<Input
							name="username"
							prefix={
								<Icon
									type="user"
									style={{
										color: "rgba(0,0,0,.25)"
									}}
								/>
							}
							value={values.username}
							type="text"
							onChange={handleChange}
						/>
					</FormItem>
					<FormItem {...formItemLayout} label="Password">
						<Input
							prefix={
								<Icon
									type="lock"
									style={{
										color: "rgba(0,0,0,.25)"
									}}
								/>
							}
							name="password"
							value={values.password}
							type="text"
							onChange={handleChange}
						/>
					</FormItem>
					<FormItem {...formItemLayout} label="E-mail">
						<Input
							prefix={
								<Icon
									type="mail"
									style={{
										color: "rgba(0,0,0,.25)"
									}}
								/>
							}
							name="email"
							value={values.email}
							type="text"
							onChange={handleChange}
						/>
					</FormItem>
					<FormItem {...buttonItemLayout}>
						<Button type="primary" htmlType="submit">
							Sign up
						</Button>
						<Link href="/signin">
							<a style={{ marginLeft: "15px" }}>Sign in</a>
						</Link>
					</FormItem>
				</Form>
			)}
		/>
	</div>
);
