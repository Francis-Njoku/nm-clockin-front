import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'

import PageHeader from '../__Library/PageHeader'

import { useAuthRedux } from 'global/store/auth'

export default function PasswordReset() {
  const { changePassword } = useAuthRedux()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })
  const registerOptions = {
    password: {
      required: 'Password is required',
      minLength: {
        value: 8,
        message: 'Password must have at least 8 characters'
      },
      validate: {
        uppercase: (value) =>
          /[A-Z]/g.test(value) || 'Password should contain at least one uppercase letter',
        lowercase: (value) =>
          /[a-z]/g.test(value) || 'Password should contain at least one lowercase letter',
        number: (value) => /[0-9]/g.test(value) || 'Password should contain at least one number',
        specialCharacter: (value) =>
          /[#?!@$%^&*-]/g.test(value) || 'Password should contain at least one special character'
      }
    },
    password_confirmation: {
      required: 'password confirmation is required',
      validate: {
        confirmPassword: (value) => watch('password') === value || "Passwords don't match"
      }
    },
    default: {}
  }

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Change Password" />
      <div className="flex flex-col  py-1 pb-4">
        <form
          onSubmit={handleSubmit((data) => changePassword(data, reset))}
          className="flex flex-col lg:flex-row  gap-4 lg:items-end ">
          <div className="flex-1">
            <label className="form-label">New Password</label>
            <input
              {...register(`password`, registerOptions.password)}
              type="password"
              className="form-control form-control-lg"
              placeholder="8+ characters required"
            />
          </div>
          <div className="flex-1">
            <label className="form-label">Confirm New password</label>
            <input
              {...register(`password_confirmation`, registerOptions.password_confirmation)}
              type="password"
              className="form-control form-control-lg"
              placeholder="8+ characters required"
            />
          </div>
          <div className="flex-1 ">
            <button
              // onClick={() => console.log('SUBMIT!!!!')}
              type="submit"
              className="btn btn-lg btn-block lift text-uppercase form-control form-control-lg btn-dark">
              Change Password
            </button>
          </div>
        </form>
        <div>
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p className="uppercase text-red-500">{message}</p>}
          />
          <ErrorMessage
            errors={errors}
            name="password_confirmation"
            render={({ message }) => <p className="uppercase text-red-500">{message}</p>}
          />
        </div>
      </div>
    </div>
  )
}

//export default PasswordReset;
