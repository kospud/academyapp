import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type Course = {
  __typename?: 'Course';
  cover?: Maybe<File>;
  description?: Maybe<Array<Scalars['JSONObject']>>;
  id: Scalars['ID'];
  /** Преподаватели курса */
  mentors?: Maybe<Array<Mentor>>;
  published: Scalars['Boolean'];
  shortDescription?: Maybe<Scalars['String']>;
  /** Навыки получаемые пользователем */
  skills?: Maybe<Array<CourseSkill>>;
  title?: Maybe<Scalars['String']>;
};

export type CourseInfoInput = {
  description: Array<Scalars['JSONObject']>;
  id: Scalars['ID'];
  shortDescription: Scalars['String'];
  title: Scalars['String'];
};

export type CourseSkill = {
  __typename?: 'CourseSkill';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  mime_type: Scalars['String'];
  name: Scalars['String'];
  size: Scalars['Float'];
  url?: Maybe<Scalars['String']>;
};

export type Mentor = {
  __typename?: 'Mentor';
  courses: Array<Course>;
  descriptionDesktop: Scalars['JSONObject'];
  descriptionMobile: Scalars['JSONObject'];
  descriptionTablet: Scalars['JSONObject'];
  id: Scalars['String'];
  name: Scalars['String'];
  shortDescription: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCourseSkills: Course;
  courseChangePublished: Course;
  createUser: User;
  saveCourseInfo: Course;
  signInAdmin: UserSignUpResult;
  signInUser: UserSignUpResult;
  signUpUser: UserSignUpResult;
};


export type MutationAddCourseSkillsArgs = {
  id: Scalars['String'];
  skills: Array<Scalars['String']>;
};


export type MutationCourseChangePublishedArgs = {
  id: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
};


export type MutationSaveCourseInfoArgs = {
  data: CourseInfoInput;
};


export type MutationSignInAdminArgs = {
  data: UserSingInInput;
};


export type MutationSignInUserArgs = {
  data: UserSingInInput;
};


export type MutationSignUpUserArgs = {
  data: UserSignUpInput;
};

export type Query = {
  __typename?: 'Query';
  allCourses: Array<Course>;
  allMentors: Array<Mentor>;
  allSkills: Array<CourseSkill>;
  appCourse: Course;
  course: Course;
  editCoursePage: Course;
  userMe: UserSignInResult;
  users: Array<User>;
};


export type QueryAppCourseArgs = {
  courseId: Scalars['String'];
};


export type QueryCourseArgs = {
  id: Scalars['String'];
};


export type QueryEditCoursePageArgs = {
  courseId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

/** Результат регистрации нового пользователя */
export type UserSignInResult = {
  __typename?: 'UserSignInResult';
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  surname?: Maybe<Scalars['String']>;
};

export type UserSignUpInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserSignUpResult = {
  __typename?: 'UserSignUpResult';
  token: Scalars['String'];
  user: UserSignInResult;
};

export type UserSingInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AllCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCoursesQuery = { __typename?: 'Query', allCourses: Array<{ __typename?: 'Course', id: string, shortDescription?: string | null, title?: string | null, cover?: { __typename?: 'File', url?: string | null } | null }> };

export type CourseQueryVariables = Exact<{
  courseId: Scalars['String'];
}>;


export type CourseQuery = { __typename?: 'Query', course: { __typename?: 'Course', id: string, title?: string | null, shortDescription?: string | null, description?: Array<any> | null, skills?: Array<{ __typename?: 'CourseSkill', name: string }> | null, mentors?: Array<{ __typename?: 'Mentor', name: string }> | null } };

export type LoginMutationVariables = Exact<{
  data: UserSingInInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'UserSignUpResult', token: string, user: { __typename?: 'UserSignInResult', name: string, id: string, email: string, surname?: string | null } } };

export type UserMeQueryVariables = Exact<{ [key: string]: never; }>;


export type UserMeQuery = { __typename?: 'Query', userMe: { __typename?: 'UserSignInResult', id: string, email: string, name: string, surname?: string | null } };


export const AllCoursesDocument = gql`
    query AllCourses {
  allCourses {
    id
    shortDescription
    title
    cover {
      url
    }
  }
}
    `;

/**
 * __useAllCoursesQuery__
 *
 * To run a query within a React component, call `useAllCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCoursesQuery(baseOptions?: Apollo.QueryHookOptions<AllCoursesQuery, AllCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCoursesQuery, AllCoursesQueryVariables>(AllCoursesDocument, options);
      }
export function useAllCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCoursesQuery, AllCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCoursesQuery, AllCoursesQueryVariables>(AllCoursesDocument, options);
        }
export type AllCoursesQueryHookResult = ReturnType<typeof useAllCoursesQuery>;
export type AllCoursesLazyQueryHookResult = ReturnType<typeof useAllCoursesLazyQuery>;
export type AllCoursesQueryResult = Apollo.QueryResult<AllCoursesQuery, AllCoursesQueryVariables>;
export function refetchAllCoursesQuery(variables?: AllCoursesQueryVariables) {
      return { query: AllCoursesDocument, variables: variables }
    }
export const CourseDocument = gql`
    query Course($courseId: String!) {
  course(id: $courseId) {
    id
    title
    shortDescription
    description
    skills {
      name
    }
    mentors {
      name
    }
  }
}
    `;

/**
 * __useCourseQuery__
 *
 * To run a query within a React component, call `useCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useCourseQuery(baseOptions: Apollo.QueryHookOptions<CourseQuery, CourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
      }
export function useCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CourseQuery, CourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
        }
export type CourseQueryHookResult = ReturnType<typeof useCourseQuery>;
export type CourseLazyQueryHookResult = ReturnType<typeof useCourseLazyQuery>;
export type CourseQueryResult = Apollo.QueryResult<CourseQuery, CourseQueryVariables>;
export function refetchCourseQuery(variables: CourseQueryVariables) {
      return { query: CourseDocument, variables: variables }
    }
export const LoginDocument = gql`
    mutation Login($data: UserSingInInput!) {
  signInUser(data: $data) {
    user {
      name
      id
      email
      surname
    }
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const UserMeDocument = gql`
    query UserMe {
  userMe {
    id
    email
    name
    surname
  }
}
    `;

/**
 * __useUserMeQuery__
 *
 * To run a query within a React component, call `useUserMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserMeQuery(baseOptions?: Apollo.QueryHookOptions<UserMeQuery, UserMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserMeQuery, UserMeQueryVariables>(UserMeDocument, options);
      }
export function useUserMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserMeQuery, UserMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserMeQuery, UserMeQueryVariables>(UserMeDocument, options);
        }
export type UserMeQueryHookResult = ReturnType<typeof useUserMeQuery>;
export type UserMeLazyQueryHookResult = ReturnType<typeof useUserMeLazyQuery>;
export type UserMeQueryResult = Apollo.QueryResult<UserMeQuery, UserMeQueryVariables>;
export function refetchUserMeQuery(variables?: UserMeQueryVariables) {
      return { query: UserMeDocument, variables: variables }
    }