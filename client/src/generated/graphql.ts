import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Upload: { input: any; output: any; }
};

export type Area = {
  __typename?: 'Area';
  frequencies: Array<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Coordinate = {
  __typename?: 'Coordinate';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  areas?: Maybe<Array<Maybe<Area>>>;
  spectrum?: Maybe<Array<Maybe<Coordinate>>>;
};


export type QuerySpectrumArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GetAreasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAreasQuery = { __typename?: 'Query', areas?: Array<{ __typename?: 'Area', id: string, name: string } | null> | null };

export type GetSpectrumQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetSpectrumQuery = { __typename?: 'Query', spectrum?: Array<{ __typename?: 'Coordinate', x: number, y: number } | null> | null };


export const GetAreasDocument = gql`
    query GetAreas {
  areas {
    id
    name
  }
}
    `;

/**
 * __useGetAreasQuery__
 *
 * To run a query within a React component, call `useGetAreasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAreasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAreasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAreasQuery(baseOptions?: Apollo.QueryHookOptions<GetAreasQuery, GetAreasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAreasQuery, GetAreasQueryVariables>(GetAreasDocument, options);
      }
export function useGetAreasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAreasQuery, GetAreasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAreasQuery, GetAreasQueryVariables>(GetAreasDocument, options);
        }
export function useGetAreasSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAreasQuery, GetAreasQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAreasQuery, GetAreasQueryVariables>(GetAreasDocument, options);
        }
export type GetAreasQueryHookResult = ReturnType<typeof useGetAreasQuery>;
export type GetAreasLazyQueryHookResult = ReturnType<typeof useGetAreasLazyQuery>;
export type GetAreasSuspenseQueryHookResult = ReturnType<typeof useGetAreasSuspenseQuery>;
export type GetAreasQueryResult = Apollo.QueryResult<GetAreasQuery, GetAreasQueryVariables>;
export const GetSpectrumDocument = gql`
    query GetSpectrum($id: ID!) {
  spectrum(id: $id) {
    x
    y
  }
}
    `;

/**
 * __useGetSpectrumQuery__
 *
 * To run a query within a React component, call `useGetSpectrumQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpectrumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpectrumQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSpectrumQuery(baseOptions: Apollo.QueryHookOptions<GetSpectrumQuery, GetSpectrumQueryVariables> & ({ variables: GetSpectrumQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSpectrumQuery, GetSpectrumQueryVariables>(GetSpectrumDocument, options);
      }
export function useGetSpectrumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSpectrumQuery, GetSpectrumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSpectrumQuery, GetSpectrumQueryVariables>(GetSpectrumDocument, options);
        }
export function useGetSpectrumSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSpectrumQuery, GetSpectrumQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSpectrumQuery, GetSpectrumQueryVariables>(GetSpectrumDocument, options);
        }
export type GetSpectrumQueryHookResult = ReturnType<typeof useGetSpectrumQuery>;
export type GetSpectrumLazyQueryHookResult = ReturnType<typeof useGetSpectrumLazyQuery>;
export type GetSpectrumSuspenseQueryHookResult = ReturnType<typeof useGetSpectrumSuspenseQuery>;
export type GetSpectrumQueryResult = Apollo.QueryResult<GetSpectrumQuery, GetSpectrumQueryVariables>;