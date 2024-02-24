'use server';

import { auth, signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { cookies } from 'next/headers';
import { apis } from '@/lib/apis';

export async function changeTheme(value: string) {
  cookies().set('theme-mode', value);
}

export async function getTheme() {
  return cookies().get('theme-mode')?.value;
}

export async function saveSessionCookie(id: string) {
  const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\_+<>@\#$%&\\\(\'\"]/gi;
  const text = id.replace(reg, '').split(/\s/)[0].split(/\=/);

  cookies().set(text[0], text[1]);
}

// export async function sessionTouch() {
//   const res = apis.user.sessionTouch();
//   console.log('sessionTouch', res);

//   // try {
//   //   const res = await fetch(`${process.env.APIURL}/user/session-touch`, {
//   //     method: 'GET',
//   //   });
//   //   console.log(res);

//   //   const setCookie = res.headers.get('set-cookie');
//   //   const text = setCookie!.split(' ');

//   //   const sooniSession = text[0].split('=');
//   //   cookies().set(sooniSession[0], sooniSession[1]);
//   // } catch (error: any) {
//   //   console.log(error);

//   //   throw error;
//   // } finally {
//   //   console.log('finally');
//   // }
// }

// sign in
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return error.cause?.err?.message;
      }
    }
    throw error;
  }
}

// sign out
export async function onSignOut() {
  const { user } = await getAuth();

  cookies()
    .getAll()
    .forEach((e) => {
      if (e.name.indexOf('theme') < 0) {
        cookies().delete(e.name);
      }
    });

  try {
    // await apis.user.logout({ user: { id: user?.id } });
  } catch (error) {
    console.log('error', error);
  } finally {
    await signOut();
  }
}

export async function getAuth() {
  const session = await auth();
  const role = session?.user.type.toLowerCase();
  const user = session?.user;

  return { role, user };
}
