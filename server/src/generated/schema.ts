import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AirQuality = {
  __typename?: 'AirQuality';
  PM10: AirQualityData;
  PM25: AirQualityData;
};

export type AirQualityData = {
  __typename?: 'AirQualityData';
  data: AirQualityPollutionData;
  pollutionType: Scalars['String']['output'];
};

export type AirQualityPollutionData = {
  __typename?: 'AirQualityPollutionData';
  alertThreshold: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type CalendarAuthenticationQuery = {
  __typename?: 'CalendarAuthenticationQuery';
  loginStatus: Scalars['Boolean']['output'];
  loginUrl: Scalars['String']['output'];
};


export type CalendarAuthenticationQueryLoginStatusArgs = {
  userId: Scalars['String']['input'];
};


export type CalendarAuthenticationQueryLoginUrlArgs = {
  userId: Scalars['String']['input'];
};

export type CalendarMutation = {
  __typename?: 'CalendarMutation';
  authenticate: Scalars['Boolean']['output'];
};


export type CalendarMutationAuthenticateArgs = {
  code: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CalendarQueryType = {
  __typename?: 'CalendarQueryType';
  authentication: CalendarAuthenticationQuery;
  events: Array<Event>;
};


export type CalendarQueryTypeEventsArgs = {
  userId: Scalars['String']['input'];
};

export type Event = {
  __typename?: 'Event';
  name: Scalars['String']['output'];
  start: EventTime;
};

export type EventTime = {
  __typename?: 'EventTime';
  dateTime: Scalars['String']['output'];
  timeZone: Scalars['String']['output'];
};

export enum MainGateStatus {
  Closed = 'CLOSED',
  Open = 'OPEN',
  PartiallyOpen = 'PARTIALLY_OPEN',
  Unknown = 'UNKNOWN'
}

export type MainGateStatusEvent = {
  __typename?: 'MainGateStatusEvent';
  status: MainGateStatus;
};

export type MultiDayWeather = {
  __typename?: 'MultiDayWeather';
  temperature: Scalars['Float']['output'];
  weatherCode: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  calendar: CalendarMutation;
  mainGate: Scalars['Boolean']['output'];
  smallGate: Scalars['Boolean']['output'];
};


export type MutationMainGateArgs = {
  toggle: Scalars['Boolean']['input'];
};


export type MutationSmallGateArgs = {
  toggle: Scalars['Boolean']['input'];
};

export type Query = {
  __typename?: 'Query';
  airQuality: AirQuality;
  calendar: CalendarQueryType;
  multiDayWeather: Array<MultiDayWeather>;
  singleDayWeather: SingleDayWeather;
};


export type QueryAirQualityArgs = {
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
};


export type QueryMultiDayWeatherArgs = {
  dayCount?: InputMaybe<Scalars['Int']['input']>;
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
};


export type QuerySingleDayWeatherArgs = {
  latitude: Scalars['String']['input'];
  longitude: Scalars['String']['input'];
};

export type SensorListUpdate = {
  __typename?: 'SensorListUpdate';
  name: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type SingleDayTemperature = {
  __typename?: 'SingleDayTemperature';
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
};

export type SingleDayWeather = {
  __typename?: 'SingleDayWeather';
  temperature: SingleDayTemperature;
  weatherCode: Scalars['Int']['output'];
};

export enum SmallGateStatus {
  Closed = 'CLOSED',
  Open = 'OPEN',
  Unknown = 'UNKNOWN'
}

export type SmallGateStatusEvent = {
  __typename?: 'SmallGateStatusEvent';
  status: SmallGateStatus;
};

export type Subscription = {
  __typename?: 'Subscription';
  mainGateStatus: MainGateStatusEvent;
  sensorListUpdates: Array<SensorListUpdate>;
  smallGateStatus: SmallGateStatusEvent;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AirQuality: ResolverTypeWrapper<AirQuality>;
  AirQualityData: ResolverTypeWrapper<AirQualityData>;
  AirQualityPollutionData: ResolverTypeWrapper<AirQualityPollutionData>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CalendarAuthenticationQuery: ResolverTypeWrapper<CalendarAuthenticationQuery>;
  CalendarMutation: ResolverTypeWrapper<CalendarMutation>;
  CalendarQueryType: ResolverTypeWrapper<CalendarQueryType>;
  Event: ResolverTypeWrapper<Event>;
  EventTime: ResolverTypeWrapper<EventTime>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  MainGateStatus: MainGateStatus;
  MainGateStatusEvent: ResolverTypeWrapper<MainGateStatusEvent>;
  MultiDayWeather: ResolverTypeWrapper<MultiDayWeather>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SensorListUpdate: ResolverTypeWrapper<SensorListUpdate>;
  SingleDayTemperature: ResolverTypeWrapper<SingleDayTemperature>;
  SingleDayWeather: ResolverTypeWrapper<SingleDayWeather>;
  SmallGateStatus: SmallGateStatus;
  SmallGateStatusEvent: ResolverTypeWrapper<SmallGateStatusEvent>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AirQuality: AirQuality;
  AirQualityData: AirQualityData;
  AirQualityPollutionData: AirQualityPollutionData;
  Boolean: Scalars['Boolean']['output'];
  CalendarAuthenticationQuery: CalendarAuthenticationQuery;
  CalendarMutation: CalendarMutation;
  CalendarQueryType: CalendarQueryType;
  Event: Event;
  EventTime: EventTime;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  MainGateStatusEvent: MainGateStatusEvent;
  MultiDayWeather: MultiDayWeather;
  Mutation: {};
  Query: {};
  SensorListUpdate: SensorListUpdate;
  SingleDayTemperature: SingleDayTemperature;
  SingleDayWeather: SingleDayWeather;
  SmallGateStatusEvent: SmallGateStatusEvent;
  String: Scalars['String']['output'];
  Subscription: {};
};

export type AirQualityResolvers<ContextType = any, ParentType extends ResolversParentTypes['AirQuality'] = ResolversParentTypes['AirQuality']> = {
  PM10?: Resolver<ResolversTypes['AirQualityData'], ParentType, ContextType>;
  PM25?: Resolver<ResolversTypes['AirQualityData'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AirQualityDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['AirQualityData'] = ResolversParentTypes['AirQualityData']> = {
  data?: Resolver<ResolversTypes['AirQualityPollutionData'], ParentType, ContextType>;
  pollutionType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AirQualityPollutionDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['AirQualityPollutionData'] = ResolversParentTypes['AirQualityPollutionData']> = {
  alertThreshold?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalendarAuthenticationQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarAuthenticationQuery'] = ResolversParentTypes['CalendarAuthenticationQuery']> = {
  loginStatus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<CalendarAuthenticationQueryLoginStatusArgs, 'userId'>>;
  loginUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<CalendarAuthenticationQueryLoginUrlArgs, 'userId'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalendarMutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarMutation'] = ResolversParentTypes['CalendarMutation']> = {
  authenticate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<CalendarMutationAuthenticateArgs, 'code' | 'userId'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CalendarQueryTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarQueryType'] = ResolversParentTypes['CalendarQueryType']> = {
  authentication?: Resolver<ResolversTypes['CalendarAuthenticationQuery'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<CalendarQueryTypeEventsArgs, 'userId'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  start?: Resolver<ResolversTypes['EventTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventTime'] = ResolversParentTypes['EventTime']> = {
  dateTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timeZone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MainGateStatusEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['MainGateStatusEvent'] = ResolversParentTypes['MainGateStatusEvent']> = {
  status?: Resolver<ResolversTypes['MainGateStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultiDayWeatherResolvers<ContextType = any, ParentType extends ResolversParentTypes['MultiDayWeather'] = ResolversParentTypes['MultiDayWeather']> = {
  temperature?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  weatherCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  calendar?: Resolver<ResolversTypes['CalendarMutation'], ParentType, ContextType>;
  mainGate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationMainGateArgs, 'toggle'>>;
  smallGate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSmallGateArgs, 'toggle'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  airQuality?: Resolver<ResolversTypes['AirQuality'], ParentType, ContextType, RequireFields<QueryAirQualityArgs, 'latitude' | 'longitude'>>;
  calendar?: Resolver<ResolversTypes['CalendarQueryType'], ParentType, ContextType>;
  multiDayWeather?: Resolver<Array<ResolversTypes['MultiDayWeather']>, ParentType, ContextType, RequireFields<QueryMultiDayWeatherArgs, 'latitude' | 'longitude'>>;
  singleDayWeather?: Resolver<ResolversTypes['SingleDayWeather'], ParentType, ContextType, RequireFields<QuerySingleDayWeatherArgs, 'latitude' | 'longitude'>>;
};

export type SensorListUpdateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SensorListUpdate'] = ResolversParentTypes['SensorListUpdate']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SingleDayTemperatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['SingleDayTemperature'] = ResolversParentTypes['SingleDayTemperature']> = {
  max?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  min?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SingleDayWeatherResolvers<ContextType = any, ParentType extends ResolversParentTypes['SingleDayWeather'] = ResolversParentTypes['SingleDayWeather']> = {
  temperature?: Resolver<ResolversTypes['SingleDayTemperature'], ParentType, ContextType>;
  weatherCode?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SmallGateStatusEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['SmallGateStatusEvent'] = ResolversParentTypes['SmallGateStatusEvent']> = {
  status?: Resolver<ResolversTypes['SmallGateStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  mainGateStatus?: SubscriptionResolver<ResolversTypes['MainGateStatusEvent'], "mainGateStatus", ParentType, ContextType>;
  sensorListUpdates?: SubscriptionResolver<Array<ResolversTypes['SensorListUpdate']>, "sensorListUpdates", ParentType, ContextType>;
  smallGateStatus?: SubscriptionResolver<ResolversTypes['SmallGateStatusEvent'], "smallGateStatus", ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AirQuality?: AirQualityResolvers<ContextType>;
  AirQualityData?: AirQualityDataResolvers<ContextType>;
  AirQualityPollutionData?: AirQualityPollutionDataResolvers<ContextType>;
  CalendarAuthenticationQuery?: CalendarAuthenticationQueryResolvers<ContextType>;
  CalendarMutation?: CalendarMutationResolvers<ContextType>;
  CalendarQueryType?: CalendarQueryTypeResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventTime?: EventTimeResolvers<ContextType>;
  MainGateStatusEvent?: MainGateStatusEventResolvers<ContextType>;
  MultiDayWeather?: MultiDayWeatherResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SensorListUpdate?: SensorListUpdateResolvers<ContextType>;
  SingleDayTemperature?: SingleDayTemperatureResolvers<ContextType>;
  SingleDayWeather?: SingleDayWeatherResolvers<ContextType>;
  SmallGateStatusEvent?: SmallGateStatusEventResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};

