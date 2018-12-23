import { useState } from "react";
import { Form, Input, Button, Icon, Alert } from "antd";
import { Formik } from "formik";
import { formItemLayout, buttonItemLayout, Warning } from "../features/common";
import Link from "next/link";
import Router from "next/router";
import { connect } from "react-redux";
import { userFetched } from "../features/user/index";

const FormItem = Form.Item;

const Login = ({ userFetched }) => {
	const [error, setError] = useState(null);

	return (
		<div>
			<h2>Login</h2>
			<Formik
				initialValues={{
					username: "",
					password: ""
				}}
				onSubmit={async values => {
					const body = JSON.stringify(values);

					try {
						const res = await fetch("./api/login", {
							method: "POST",
							credentials: "same-origin",
							headers: {
								"Content-Type":
									"application/json; charset=utf-8"
							},
							body
						});

						if (res.ok) {
							const { user } = await res.json();
							console.log(user);
							userFetched(user);
							await Router.push("/");
						} else {
							window.scrollTo(0, 0);
							setError("There was an error logging in.");
						}
					} catch (err) {
						window.scrollTo(0, 0);
						setError(err || "There was an error logging in.");
					}
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
						{error && (
							<FormItem {...buttonItemLayout}>
								<Warning message={error} />
							</FormItem>
						)}
						<FormItem {...buttonItemLayout}>
							<Button type="primary" htmlType="submit">
								Login
							</Button>
							<Link href="/login">
								<a style={{ marginLeft: "15px" }}>Login</a>
							</Link>
						</FormItem>
					</Form>
				)}
			/>
		</div>
	);
};

export default connect(
	null,
	{ userFetched }
)(Login);
