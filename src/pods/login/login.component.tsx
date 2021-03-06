import * as React from 'react';
import { Form, Field } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { TextField } from 'common/components/forms';
import Button from '@material-ui/core/Button';
import { LoginEntityVm } from './login.vm';
import { formValidation } from './login.validation';

const useStyles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

interface Props {
  onLogin: (loginInfo: LoginEntityVm) => void;
  initialLogin: LoginEntityVm;
}

export const LoginComponent: React.FunctionComponent<Props> = props => {
  const classes = useStyles(props);
  const { onLogin, initialLogin } = props;

  return (
    <Card>
      <CardHeader title="Login" />
      <CardContent>
        <div className={classes.formContainer}>
          <Form
            onSubmit={values => onLogin(values)}
            initialValues={initialLogin}
            render={({ handleSubmit, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                <Field
                  fullWidth
                  name="login"
                  component={TextField}
                  type="text"
                  label="Name"
                  validate={(value, _, meta) =>
                    formValidation.validateField(meta.name, value)
                  }
                />
                <Field
                  fullWidth
                  name="password"
                  component={TextField}
                  type="password"
                  label="Password"
                  validate={(value, _, meta) =>
                    formValidation.validateField(meta.name, value)
                  }
                />
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </form>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};
