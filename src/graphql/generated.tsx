import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Hex: any;
  Json: any;
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  RichTextAST: any;
}

export interface Aggregate {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
}

/** Asset system model */
export interface Asset extends Node {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  iconSocialNetwork: Array<SocialNetwork>;
  /** The unique identifier */
  id: Scalars['ID'];
  imageCategory: Array<Category>;
  imageProductHighlight: Array<ProductHighlight>;
  imagesProduct: Array<Product>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
}


/** Asset system model */
export interface AssetCreatedAtArgs {
  variation?: SystemDateTimeFieldVariation;
}


/** Asset system model */
export interface AssetCreatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


/** Asset system model */
export interface AssetDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}


/** Asset system model */
export interface AssetHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
}


/** Asset system model */
export interface AssetIconSocialNetworkArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SocialNetworkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialNetworkWhereInput>;
}


/** Asset system model */
export interface AssetImageCategoryArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryWhereInput>;
}


/** Asset system model */
export interface AssetImageProductHighlightArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductHighlightOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductHighlightWhereInput>;
}


/** Asset system model */
export interface AssetImagesProductArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductWhereInput>;
}


/** Asset system model */
export interface AssetLocalizationsArgs {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
}


/** Asset system model */
export interface AssetPublishedAtArgs {
  variation?: SystemDateTimeFieldVariation;
}


/** Asset system model */
export interface AssetPublishedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


/** Asset system model */
export interface AssetScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


/** Asset system model */
export interface AssetUpdatedAtArgs {
  variation?: SystemDateTimeFieldVariation;
}


/** Asset system model */
export interface AssetUpdatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


/** Asset system model */
export interface AssetUrlArgs {
  transformation?: InputMaybe<AssetTransformationInput>;
}

export interface AssetConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
}

/** A connection to a list of items. */
export interface AssetConnection {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface AssetCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  iconSocialNetwork?: InputMaybe<SocialNetworkCreateManyInlineInput>;
  imageCategory?: InputMaybe<CategoryCreateManyInlineInput>;
  imageProductHighlight?: InputMaybe<ProductHighlightCreateManyInlineInput>;
  imagesProduct?: InputMaybe<ProductCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface AssetCreateLocalizationDataInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface AssetCreateLocalizationInput {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
}

export interface AssetCreateLocalizationsInput {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
}

export interface AssetCreateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
}

export interface AssetCreateOneInlineInput {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
}

/** An edge in a connection. */
export interface AssetEdge {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
}

/** Identifies documents */
export interface AssetManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  iconSocialNetwork_every?: InputMaybe<SocialNetworkWhereInput>;
  iconSocialNetwork_none?: InputMaybe<SocialNetworkWhereInput>;
  iconSocialNetwork_some?: InputMaybe<SocialNetworkWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageCategory_every?: InputMaybe<CategoryWhereInput>;
  imageCategory_none?: InputMaybe<CategoryWhereInput>;
  imageCategory_some?: InputMaybe<CategoryWhereInput>;
  imageProductHighlight_every?: InputMaybe<ProductHighlightWhereInput>;
  imageProductHighlight_none?: InputMaybe<ProductHighlightWhereInput>;
  imageProductHighlight_some?: InputMaybe<ProductHighlightWhereInput>;
  imagesProduct_every?: InputMaybe<ProductWhereInput>;
  imagesProduct_none?: InputMaybe<ProductWhereInput>;
  imagesProduct_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export interface AssetTransformationInput {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
}

export interface AssetUpdateInput {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  iconSocialNetwork?: InputMaybe<SocialNetworkUpdateManyInlineInput>;
  imageCategory?: InputMaybe<CategoryUpdateManyInlineInput>;
  imageProductHighlight?: InputMaybe<ProductHighlightUpdateManyInlineInput>;
  imagesProduct?: InputMaybe<ProductUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface AssetUpdateLocalizationDataInput {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface AssetUpdateLocalizationInput {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
}

export interface AssetUpdateLocalizationsInput {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
}

export interface AssetUpdateManyInlineInput {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
}

export interface AssetUpdateManyInput {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface AssetUpdateManyLocalizationDataInput {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface AssetUpdateManyLocalizationInput {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
}

export interface AssetUpdateManyLocalizationsInput {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
}

export interface AssetUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
}

export interface AssetUpdateOneInlineInput {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
}

export interface AssetUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
}

export interface AssetUpsertInput {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
}

export interface AssetUpsertLocalizationInput {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
}

export interface AssetUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
}

/** Identifies documents */
export interface AssetWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  iconSocialNetwork_every?: InputMaybe<SocialNetworkWhereInput>;
  iconSocialNetwork_none?: InputMaybe<SocialNetworkWhereInput>;
  iconSocialNetwork_some?: InputMaybe<SocialNetworkWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  imageCategory_every?: InputMaybe<CategoryWhereInput>;
  imageCategory_none?: InputMaybe<CategoryWhereInput>;
  imageCategory_some?: InputMaybe<CategoryWhereInput>;
  imageProductHighlight_every?: InputMaybe<ProductHighlightWhereInput>;
  imageProductHighlight_none?: InputMaybe<ProductHighlightWhereInput>;
  imageProductHighlight_some?: InputMaybe<ProductHighlightWhereInput>;
  imagesProduct_every?: InputMaybe<ProductWhereInput>;
  imagesProduct_none?: InputMaybe<ProductWhereInput>;
  imagesProduct_some?: InputMaybe<ProductWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
}

/** References Asset record uniquely */
export interface AssetWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface BatchPayload {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
}

export interface Category extends Node {
  __typename?: 'Category';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** List of Category versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image: Asset;
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
}


export interface CategoryCreatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface CategoryDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}


export interface CategoryHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
}


export interface CategoryImageArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface CategoryPublishedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface CategoryScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface CategoryUpdatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}

export interface CategoryConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategoryWhereUniqueInput;
}

/** A connection to a list of items. */
export interface CategoryConnection {
  __typename?: 'CategoryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface CategoryCreateInput {
  cl7cjib4f4gnn01ul96zs727e?: InputMaybe<ProductCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image: AssetCreateOneInlineInput;
  name: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface CategoryCreateManyInlineInput {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
}

export interface CategoryCreateOneInlineInput {
  /** Connect one existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
}

/** An edge in a connection. */
export interface CategoryEdge {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Category;
}

/** Identifies documents */
export interface CategoryManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum CategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface CategoryUpdateInput {
  cl7cjib4f4gnn01ul96zs727e?: InputMaybe<ProductUpdateManyInlineInput>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
}

export interface CategoryUpdateManyInlineInput {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
}

export interface CategoryUpdateManyInput {
  name?: InputMaybe<Scalars['String']>;
}

export interface CategoryUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: CategoryUpdateManyInput;
  /** Document search */
  where: CategoryWhereInput;
}

export interface CategoryUpdateOneInlineInput {
  /** Connect existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Category document */
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
}

export interface CategoryUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: CategoryUpdateInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
}

export interface CategoryUpsertInput {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
}

export interface CategoryUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: CategoryUpsertInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
}

/** Identifies documents */
export interface CategoryWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References Category record uniquely */
export interface CategoryWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export interface Color {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export interface ColorInput {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
}

export interface ConnectPositionInput {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export interface DocumentOutputInput {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
}

/** Transformations for Documents */
export interface DocumentTransformationInput {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
}

export interface DocumentVersion {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
}

export interface FooterItem extends Node {
  __typename?: 'FooterItem';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  displayText: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<FooterItem>;
  /** List of FooterItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  order: Scalars['Int'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  redirectTo: Scalars['String'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
}


export interface FooterItemCreatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface FooterItemDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}


export interface FooterItemHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
}


export interface FooterItemPublishedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface FooterItemScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface FooterItemUpdatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}

export interface FooterItemConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FooterItemWhereUniqueInput;
}

/** A connection to a list of items. */
export interface FooterItemConnection {
  __typename?: 'FooterItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FooterItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface FooterItemCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayText: Scalars['String'];
  order: Scalars['Int'];
  redirectTo: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface FooterItemCreateManyInlineInput {
  /** Connect multiple existing FooterItem documents */
  connect?: InputMaybe<Array<FooterItemWhereUniqueInput>>;
  /** Create and connect multiple existing FooterItem documents */
  create?: InputMaybe<Array<FooterItemCreateInput>>;
}

export interface FooterItemCreateOneInlineInput {
  /** Connect one existing FooterItem document */
  connect?: InputMaybe<FooterItemWhereUniqueInput>;
  /** Create and connect one FooterItem document */
  create?: InputMaybe<FooterItemCreateInput>;
}

/** An edge in a connection. */
export interface FooterItemEdge {
  __typename?: 'FooterItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FooterItem;
}

/** Identifies documents */
export interface FooterItemManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  displayText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  displayText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  displayText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  displayText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  displayText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  displayText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  displayText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  displayText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  displayText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  displayText_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  redirectTo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  redirectTo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  redirectTo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  redirectTo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  redirectTo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  redirectTo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  redirectTo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  redirectTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  redirectTo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  redirectTo_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum FooterItemOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DisplayTextAsc = 'displayText_ASC',
  DisplayTextDesc = 'displayText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RedirectToAsc = 'redirectTo_ASC',
  RedirectToDesc = 'redirectTo_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface FooterItemUpdateInput {
  displayText?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  redirectTo?: InputMaybe<Scalars['String']>;
}

export interface FooterItemUpdateManyInlineInput {
  /** Connect multiple existing FooterItem documents */
  connect?: InputMaybe<Array<FooterItemConnectInput>>;
  /** Create and connect multiple FooterItem documents */
  create?: InputMaybe<Array<FooterItemCreateInput>>;
  /** Delete multiple FooterItem documents */
  delete?: InputMaybe<Array<FooterItemWhereUniqueInput>>;
  /** Disconnect multiple FooterItem documents */
  disconnect?: InputMaybe<Array<FooterItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FooterItem documents */
  set?: InputMaybe<Array<FooterItemWhereUniqueInput>>;
  /** Update multiple FooterItem documents */
  update?: InputMaybe<Array<FooterItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FooterItem documents */
  upsert?: InputMaybe<Array<FooterItemUpsertWithNestedWhereUniqueInput>>;
}

export interface FooterItemUpdateManyInput {
  displayText?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  redirectTo?: InputMaybe<Scalars['String']>;
}

export interface FooterItemUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: FooterItemUpdateManyInput;
  /** Document search */
  where: FooterItemWhereInput;
}

export interface FooterItemUpdateOneInlineInput {
  /** Connect existing FooterItem document */
  connect?: InputMaybe<FooterItemWhereUniqueInput>;
  /** Create and connect one FooterItem document */
  create?: InputMaybe<FooterItemCreateInput>;
  /** Delete currently connected FooterItem document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected FooterItem document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single FooterItem document */
  update?: InputMaybe<FooterItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FooterItem document */
  upsert?: InputMaybe<FooterItemUpsertWithNestedWhereUniqueInput>;
}

export interface FooterItemUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: FooterItemUpdateInput;
  /** Unique document search */
  where: FooterItemWhereUniqueInput;
}

export interface FooterItemUpsertInput {
  /** Create document if it didn't exist */
  create: FooterItemCreateInput;
  /** Update document if it exists */
  update: FooterItemUpdateInput;
}

export interface FooterItemUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: FooterItemUpsertInput;
  /** Unique document search */
  where: FooterItemWhereUniqueInput;
}

/** Identifies documents */
export interface FooterItemWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  displayText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  displayText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  displayText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  displayText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  displayText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  displayText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  displayText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  displayText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  displayText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  displayText_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  redirectTo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  redirectTo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  redirectTo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  redirectTo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  redirectTo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  redirectTo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  redirectTo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  redirectTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  redirectTo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  redirectTo_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References FooterItem record uniquely */
export interface FooterItemWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface Home extends Node {
  __typename?: 'Home';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Home>;
  /** List of Home versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
}


export interface HomeCreatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface HomeDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}


export interface HomeHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
}


export interface HomePublishedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface HomeScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface HomeUpdatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}

export interface HomeConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HomeWhereUniqueInput;
}

/** A connection to a list of items. */
export interface HomeConnection {
  __typename?: 'HomeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HomeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface HomeCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface HomeCreateManyInlineInput {
  /** Connect multiple existing Home documents */
  connect?: InputMaybe<Array<HomeWhereUniqueInput>>;
  /** Create and connect multiple existing Home documents */
  create?: InputMaybe<Array<HomeCreateInput>>;
}

export interface HomeCreateOneInlineInput {
  /** Connect one existing Home document */
  connect?: InputMaybe<HomeWhereUniqueInput>;
  /** Create and connect one Home document */
  create?: InputMaybe<HomeCreateInput>;
}

/** An edge in a connection. */
export interface HomeEdge {
  __typename?: 'HomeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Home;
}

/** Identifies documents */
export interface HomeManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum HomeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface HomeUpdateInput {
  /** No fields in update input */
  _?: InputMaybe<Scalars['String']>;
}

export interface HomeUpdateManyInlineInput {
  /** Connect multiple existing Home documents */
  connect?: InputMaybe<Array<HomeConnectInput>>;
  /** Create and connect multiple Home documents */
  create?: InputMaybe<Array<HomeCreateInput>>;
  /** Delete multiple Home documents */
  delete?: InputMaybe<Array<HomeWhereUniqueInput>>;
  /** Disconnect multiple Home documents */
  disconnect?: InputMaybe<Array<HomeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Home documents */
  set?: InputMaybe<Array<HomeWhereUniqueInput>>;
  /** Update multiple Home documents */
  update?: InputMaybe<Array<HomeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Home documents */
  upsert?: InputMaybe<Array<HomeUpsertWithNestedWhereUniqueInput>>;
}

export interface HomeUpdateManyInput {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
}

export interface HomeUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: HomeUpdateManyInput;
  /** Document search */
  where: HomeWhereInput;
}

export interface HomeUpdateOneInlineInput {
  /** Connect existing Home document */
  connect?: InputMaybe<HomeWhereUniqueInput>;
  /** Create and connect one Home document */
  create?: InputMaybe<HomeCreateInput>;
  /** Delete currently connected Home document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Home document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Home document */
  update?: InputMaybe<HomeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Home document */
  upsert?: InputMaybe<HomeUpsertWithNestedWhereUniqueInput>;
}

export interface HomeUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: HomeUpdateInput;
  /** Unique document search */
  where: HomeWhereUniqueInput;
}

export interface HomeUpsertInput {
  /** Create document if it didn't exist */
  create: HomeCreateInput;
  /** Update document if it exists */
  update: HomeUpdateInput;
}

export interface HomeUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: HomeUpsertInput;
  /** Unique document search */
  where: HomeWhereUniqueInput;
}

/** Identifies documents */
export interface HomeWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HomeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HomeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HomeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References Home record uniquely */
export interface HomeWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export interface ImageResizeInput {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
}

/** Transformations for Images */
export interface ImageTransformationInput {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export interface Location {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
}


/** Representing a geolocation point with latitude and longitude */
export interface LocationDistanceArgs {
  from: LocationInput;
}

/** Input for a geolocation point with latitude and longitude */
export interface LocationInput {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
}

export interface Mutation {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one category */
  createCategory?: Maybe<Category>;
  /** Create one footerItem */
  createFooterItem?: Maybe<FooterItem>;
  /** Create one home */
  createHome?: Maybe<Home>;
  /** Create one navbarItem */
  createNavbarItem?: Maybe<NavbarItem>;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Create one productHighlight */
  createProductHighlight?: Maybe<ProductHighlight>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one socialNetwork */
  createSocialNetwork?: Maybe<SocialNetwork>;
  /** Create one textContent */
  createTextContent?: Maybe<TextContent>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>;
  /** Delete one footerItem from _all_ existing stages. Returns deleted document. */
  deleteFooterItem?: Maybe<FooterItem>;
  /** Delete one home from _all_ existing stages. Returns deleted document. */
  deleteHome?: Maybe<Home>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /**
   * Delete many FooterItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyFooterItemsConnection)
   */
  deleteManyFooterItems: BatchPayload;
  /** Delete many FooterItem documents, return deleted documents */
  deleteManyFooterItemsConnection: FooterItemConnection;
  /**
   * Delete many Home documents
   * @deprecated Please use the new paginated many mutation (deleteManyHomesConnection)
   */
  deleteManyHomes: BatchPayload;
  /** Delete many Home documents, return deleted documents */
  deleteManyHomesConnection: HomeConnection;
  /**
   * Delete many NavbarItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyNavbarItemsConnection)
   */
  deleteManyNavbarItems: BatchPayload;
  /** Delete many NavbarItem documents, return deleted documents */
  deleteManyNavbarItemsConnection: NavbarItemConnection;
  /**
   * Delete many ProductHighlight documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductHighlightsConnection)
   */
  deleteManyProductHighlights: BatchPayload;
  /** Delete many ProductHighlight documents, return deleted documents */
  deleteManyProductHighlightsConnection: ProductHighlightConnection;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /**
   * Delete many SocialNetwork documents
   * @deprecated Please use the new paginated many mutation (deleteManySocialNetworksConnection)
   */
  deleteManySocialNetworks: BatchPayload;
  /** Delete many SocialNetwork documents, return deleted documents */
  deleteManySocialNetworksConnection: SocialNetworkConnection;
  /**
   * Delete many TextContent documents
   * @deprecated Please use the new paginated many mutation (deleteManyTextContentsConnection)
   */
  deleteManyTextContents: BatchPayload;
  /** Delete many TextContent documents, return deleted documents */
  deleteManyTextContentsConnection: TextContentConnection;
  /** Delete one navbarItem from _all_ existing stages. Returns deleted document. */
  deleteNavbarItem?: Maybe<NavbarItem>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Delete one productHighlight from _all_ existing stages. Returns deleted document. */
  deleteProductHighlight?: Maybe<ProductHighlight>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one socialNetwork from _all_ existing stages. Returns deleted document. */
  deleteSocialNetwork?: Maybe<SocialNetwork>;
  /** Delete one textContent from _all_ existing stages. Returns deleted document. */
  deleteTextContent?: Maybe<TextContent>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one category */
  publishCategory?: Maybe<Category>;
  /** Publish one footerItem */
  publishFooterItem?: Maybe<FooterItem>;
  /** Publish one home */
  publishHome?: Maybe<Home>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /**
   * Publish many FooterItem documents
   * @deprecated Please use the new paginated many mutation (publishManyFooterItemsConnection)
   */
  publishManyFooterItems: BatchPayload;
  /** Publish many FooterItem documents */
  publishManyFooterItemsConnection: FooterItemConnection;
  /**
   * Publish many Home documents
   * @deprecated Please use the new paginated many mutation (publishManyHomesConnection)
   */
  publishManyHomes: BatchPayload;
  /** Publish many Home documents */
  publishManyHomesConnection: HomeConnection;
  /**
   * Publish many NavbarItem documents
   * @deprecated Please use the new paginated many mutation (publishManyNavbarItemsConnection)
   */
  publishManyNavbarItems: BatchPayload;
  /** Publish many NavbarItem documents */
  publishManyNavbarItemsConnection: NavbarItemConnection;
  /**
   * Publish many ProductHighlight documents
   * @deprecated Please use the new paginated many mutation (publishManyProductHighlightsConnection)
   */
  publishManyProductHighlights: BatchPayload;
  /** Publish many ProductHighlight documents */
  publishManyProductHighlightsConnection: ProductHighlightConnection;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /**
   * Publish many SocialNetwork documents
   * @deprecated Please use the new paginated many mutation (publishManySocialNetworksConnection)
   */
  publishManySocialNetworks: BatchPayload;
  /** Publish many SocialNetwork documents */
  publishManySocialNetworksConnection: SocialNetworkConnection;
  /**
   * Publish many TextContent documents
   * @deprecated Please use the new paginated many mutation (publishManyTextContentsConnection)
   */
  publishManyTextContents: BatchPayload;
  /** Publish many TextContent documents */
  publishManyTextContentsConnection: TextContentConnection;
  /** Publish one navbarItem */
  publishNavbarItem?: Maybe<NavbarItem>;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Publish one productHighlight */
  publishProductHighlight?: Maybe<ProductHighlight>;
  /** Publish one socialNetwork */
  publishSocialNetwork?: Maybe<SocialNetwork>;
  /** Publish one textContent */
  publishTextContent?: Maybe<TextContent>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<Category>;
  /** Schedule to publish one footerItem */
  schedulePublishFooterItem?: Maybe<FooterItem>;
  /** Schedule to publish one home */
  schedulePublishHome?: Maybe<Home>;
  /** Schedule to publish one navbarItem */
  schedulePublishNavbarItem?: Maybe<NavbarItem>;
  /** Schedule to publish one product */
  schedulePublishProduct?: Maybe<Product>;
  /** Schedule to publish one productHighlight */
  schedulePublishProductHighlight?: Maybe<ProductHighlight>;
  /** Schedule to publish one socialNetwork */
  schedulePublishSocialNetwork?: Maybe<SocialNetwork>;
  /** Schedule to publish one textContent */
  schedulePublishTextContent?: Maybe<TextContent>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<Category>;
  /** Unpublish one footerItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFooterItem?: Maybe<FooterItem>;
  /** Unpublish one home from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishHome?: Maybe<Home>;
  /** Unpublish one navbarItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNavbarItem?: Maybe<NavbarItem>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduct?: Maybe<Product>;
  /** Unpublish one productHighlight from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProductHighlight?: Maybe<ProductHighlight>;
  /** Unpublish one socialNetwork from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSocialNetwork?: Maybe<SocialNetwork>;
  /** Unpublish one textContent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTextContent?: Maybe<TextContent>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>;
  /** Unpublish one footerItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFooterItem?: Maybe<FooterItem>;
  /** Unpublish one home from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishHome?: Maybe<Home>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Unpublish many FooterItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFooterItemsConnection)
   */
  unpublishManyFooterItems: BatchPayload;
  /** Find many FooterItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFooterItemsConnection: FooterItemConnection;
  /**
   * Unpublish many Home documents
   * @deprecated Please use the new paginated many mutation (unpublishManyHomesConnection)
   */
  unpublishManyHomes: BatchPayload;
  /** Find many Home documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyHomesConnection: HomeConnection;
  /**
   * Unpublish many NavbarItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNavbarItemsConnection)
   */
  unpublishManyNavbarItems: BatchPayload;
  /** Find many NavbarItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNavbarItemsConnection: NavbarItemConnection;
  /**
   * Unpublish many ProductHighlight documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductHighlightsConnection)
   */
  unpublishManyProductHighlights: BatchPayload;
  /** Find many ProductHighlight documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductHighlightsConnection: ProductHighlightConnection;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Unpublish many SocialNetwork documents
   * @deprecated Please use the new paginated many mutation (unpublishManySocialNetworksConnection)
   */
  unpublishManySocialNetworks: BatchPayload;
  /** Find many SocialNetwork documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySocialNetworksConnection: SocialNetworkConnection;
  /**
   * Unpublish many TextContent documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTextContentsConnection)
   */
  unpublishManyTextContents: BatchPayload;
  /** Find many TextContent documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTextContentsConnection: TextContentConnection;
  /** Unpublish one navbarItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNavbarItem?: Maybe<NavbarItem>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Unpublish one productHighlight from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductHighlight?: Maybe<ProductHighlight>;
  /** Unpublish one socialNetwork from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSocialNetwork?: Maybe<SocialNetwork>;
  /** Unpublish one textContent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTextContent?: Maybe<TextContent>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one category */
  updateCategory?: Maybe<Category>;
  /** Update one footerItem */
  updateFooterItem?: Maybe<FooterItem>;
  /** Update one home */
  updateHome?: Maybe<Home>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /**
   * Update many footerItems
   * @deprecated Please use the new paginated many mutation (updateManyFooterItemsConnection)
   */
  updateManyFooterItems: BatchPayload;
  /** Update many FooterItem documents */
  updateManyFooterItemsConnection: FooterItemConnection;
  /**
   * Update many homes
   * @deprecated Please use the new paginated many mutation (updateManyHomesConnection)
   */
  updateManyHomes: BatchPayload;
  /** Update many Home documents */
  updateManyHomesConnection: HomeConnection;
  /**
   * Update many navbarItems
   * @deprecated Please use the new paginated many mutation (updateManyNavbarItemsConnection)
   */
  updateManyNavbarItems: BatchPayload;
  /** Update many NavbarItem documents */
  updateManyNavbarItemsConnection: NavbarItemConnection;
  /**
   * Update many productHighlights
   * @deprecated Please use the new paginated many mutation (updateManyProductHighlightsConnection)
   */
  updateManyProductHighlights: BatchPayload;
  /** Update many ProductHighlight documents */
  updateManyProductHighlightsConnection: ProductHighlightConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /**
   * Update many socialNetworks
   * @deprecated Please use the new paginated many mutation (updateManySocialNetworksConnection)
   */
  updateManySocialNetworks: BatchPayload;
  /** Update many SocialNetwork documents */
  updateManySocialNetworksConnection: SocialNetworkConnection;
  /**
   * Update many textContents
   * @deprecated Please use the new paginated many mutation (updateManyTextContentsConnection)
   */
  updateManyTextContents: BatchPayload;
  /** Update many TextContent documents */
  updateManyTextContentsConnection: TextContentConnection;
  /** Update one navbarItem */
  updateNavbarItem?: Maybe<NavbarItem>;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Update one productHighlight */
  updateProductHighlight?: Maybe<ProductHighlight>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one socialNetwork */
  updateSocialNetwork?: Maybe<SocialNetwork>;
  /** Update one textContent */
  updateTextContent?: Maybe<TextContent>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one category */
  upsertCategory?: Maybe<Category>;
  /** Upsert one footerItem */
  upsertFooterItem?: Maybe<FooterItem>;
  /** Upsert one home */
  upsertHome?: Maybe<Home>;
  /** Upsert one navbarItem */
  upsertNavbarItem?: Maybe<NavbarItem>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
  /** Upsert one productHighlight */
  upsertProductHighlight?: Maybe<ProductHighlight>;
  /** Upsert one socialNetwork */
  upsertSocialNetwork?: Maybe<SocialNetwork>;
  /** Upsert one textContent */
  upsertTextContent?: Maybe<TextContent>;
}


export interface MutationCreateAssetArgs {
  data: AssetCreateInput;
}


export interface MutationCreateCategoryArgs {
  data: CategoryCreateInput;
}


export interface MutationCreateFooterItemArgs {
  data: FooterItemCreateInput;
}


export interface MutationCreateHomeArgs {
  data: HomeCreateInput;
}


export interface MutationCreateNavbarItemArgs {
  data: NavbarItemCreateInput;
}


export interface MutationCreateProductArgs {
  data: ProductCreateInput;
}


export interface MutationCreateProductHighlightArgs {
  data: ProductHighlightCreateInput;
}


export interface MutationCreateScheduledReleaseArgs {
  data: ScheduledReleaseCreateInput;
}


export interface MutationCreateSocialNetworkArgs {
  data: SocialNetworkCreateInput;
}


export interface MutationCreateTextContentArgs {
  data: TextContentCreateInput;
}


export interface MutationDeleteAssetArgs {
  where: AssetWhereUniqueInput;
}


export interface MutationDeleteCategoryArgs {
  where: CategoryWhereUniqueInput;
}


export interface MutationDeleteFooterItemArgs {
  where: FooterItemWhereUniqueInput;
}


export interface MutationDeleteHomeArgs {
  where: HomeWhereUniqueInput;
}


export interface MutationDeleteManyAssetsArgs {
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationDeleteManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationDeleteManyCategoriesArgs {
  where?: InputMaybe<CategoryManyWhereInput>;
}


export interface MutationDeleteManyCategoriesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryManyWhereInput>;
}


export interface MutationDeleteManyFooterItemsArgs {
  where?: InputMaybe<FooterItemManyWhereInput>;
}


export interface MutationDeleteManyFooterItemsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterItemManyWhereInput>;
}


export interface MutationDeleteManyHomesArgs {
  where?: InputMaybe<HomeManyWhereInput>;
}


export interface MutationDeleteManyHomesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomeManyWhereInput>;
}


export interface MutationDeleteManyNavbarItemsArgs {
  where?: InputMaybe<NavbarItemManyWhereInput>;
}


export interface MutationDeleteManyNavbarItemsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavbarItemManyWhereInput>;
}


export interface MutationDeleteManyProductHighlightsArgs {
  where?: InputMaybe<ProductHighlightManyWhereInput>;
}


export interface MutationDeleteManyProductHighlightsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductHighlightManyWhereInput>;
}


export interface MutationDeleteManyProductsArgs {
  where?: InputMaybe<ProductManyWhereInput>;
}


export interface MutationDeleteManyProductsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductManyWhereInput>;
}


export interface MutationDeleteManySocialNetworksArgs {
  where?: InputMaybe<SocialNetworkManyWhereInput>;
}


export interface MutationDeleteManySocialNetworksConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
}


export interface MutationDeleteManyTextContentsArgs {
  where?: InputMaybe<TextContentManyWhereInput>;
}


export interface MutationDeleteManyTextContentsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextContentManyWhereInput>;
}


export interface MutationDeleteNavbarItemArgs {
  where: NavbarItemWhereUniqueInput;
}


export interface MutationDeleteProductArgs {
  where: ProductWhereUniqueInput;
}


export interface MutationDeleteProductHighlightArgs {
  where: ProductHighlightWhereUniqueInput;
}


export interface MutationDeleteScheduledOperationArgs {
  where: ScheduledOperationWhereUniqueInput;
}


export interface MutationDeleteScheduledReleaseArgs {
  where: ScheduledReleaseWhereUniqueInput;
}


export interface MutationDeleteSocialNetworkArgs {
  where: SocialNetworkWhereUniqueInput;
}


export interface MutationDeleteTextContentArgs {
  where: TextContentWhereUniqueInput;
}


export interface MutationPublishAssetArgs {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface MutationPublishCategoryArgs {
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
}


export interface MutationPublishFooterItemArgs {
  to?: Array<Stage>;
  where: FooterItemWhereUniqueInput;
}


export interface MutationPublishHomeArgs {
  to?: Array<Stage>;
  where: HomeWhereUniqueInput;
}


export interface MutationPublishManyAssetsArgs {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface MutationPublishManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface MutationPublishManyCategoriesArgs {
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
}


export interface MutationPublishManyCategoriesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
}


export interface MutationPublishManyFooterItemsArgs {
  to?: Array<Stage>;
  where?: InputMaybe<FooterItemManyWhereInput>;
}


export interface MutationPublishManyFooterItemsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<FooterItemManyWhereInput>;
}


export interface MutationPublishManyHomesArgs {
  to?: Array<Stage>;
  where?: InputMaybe<HomeManyWhereInput>;
}


export interface MutationPublishManyHomesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<HomeManyWhereInput>;
}


export interface MutationPublishManyNavbarItemsArgs {
  to?: Array<Stage>;
  where?: InputMaybe<NavbarItemManyWhereInput>;
}


export interface MutationPublishManyNavbarItemsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<NavbarItemManyWhereInput>;
}


export interface MutationPublishManyProductHighlightsArgs {
  to?: Array<Stage>;
  where?: InputMaybe<ProductHighlightManyWhereInput>;
}


export interface MutationPublishManyProductHighlightsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductHighlightManyWhereInput>;
}


export interface MutationPublishManyProductsArgs {
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
}


export interface MutationPublishManyProductsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
}


export interface MutationPublishManySocialNetworksArgs {
  to?: Array<Stage>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
}


export interface MutationPublishManySocialNetworksConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
}


export interface MutationPublishManyTextContentsArgs {
  to?: Array<Stage>;
  where?: InputMaybe<TextContentManyWhereInput>;
}


export interface MutationPublishManyTextContentsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TextContentManyWhereInput>;
}


export interface MutationPublishNavbarItemArgs {
  to?: Array<Stage>;
  where: NavbarItemWhereUniqueInput;
}


export interface MutationPublishProductArgs {
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
}


export interface MutationPublishProductHighlightArgs {
  to?: Array<Stage>;
  where: ProductHighlightWhereUniqueInput;
}


export interface MutationPublishSocialNetworkArgs {
  to?: Array<Stage>;
  where: SocialNetworkWhereUniqueInput;
}


export interface MutationPublishTextContentArgs {
  to?: Array<Stage>;
  where: TextContentWhereUniqueInput;
}


export interface MutationSchedulePublishAssetArgs {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
}


export interface MutationSchedulePublishCategoryArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
}


export interface MutationSchedulePublishFooterItemArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: FooterItemWhereUniqueInput;
}


export interface MutationSchedulePublishHomeArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: HomeWhereUniqueInput;
}


export interface MutationSchedulePublishNavbarItemArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NavbarItemWhereUniqueInput;
}


export interface MutationSchedulePublishProductArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
}


export interface MutationSchedulePublishProductHighlightArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ProductHighlightWhereUniqueInput;
}


export interface MutationSchedulePublishSocialNetworkArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SocialNetworkWhereUniqueInput;
}


export interface MutationSchedulePublishTextContentArgs {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TextContentWhereUniqueInput;
}


export interface MutationScheduleUnpublishAssetArgs {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
}


export interface MutationScheduleUnpublishCategoryArgs {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: CategoryWhereUniqueInput;
}


export interface MutationScheduleUnpublishFooterItemArgs {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: FooterItemWhereUniqueInput;
}


export interface MutationScheduleUnpublishHomeArgs {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: HomeWhereUniqueInput;
}


export interface MutationScheduleUnpublishNavbarItemArgs {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: NavbarItemWhereUniqueInput;
}


export interface MutationScheduleUnpublishProductArgs {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ProductWhereUniqueInput;
}


export interface MutationScheduleUnpublishProductHighlightArgs {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ProductHighlightWhereUniqueInput;
}


export interface MutationScheduleUnpublishSocialNetworkArgs {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: SocialNetworkWhereUniqueInput;
}


export interface MutationScheduleUnpublishTextContentArgs {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: TextContentWhereUniqueInput;
}


export interface MutationUnpublishAssetArgs {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
}


export interface MutationUnpublishCategoryArgs {
  from?: Array<Stage>;
  where: CategoryWhereUniqueInput;
}


export interface MutationUnpublishFooterItemArgs {
  from?: Array<Stage>;
  where: FooterItemWhereUniqueInput;
}


export interface MutationUnpublishHomeArgs {
  from?: Array<Stage>;
  where: HomeWhereUniqueInput;
}


export interface MutationUnpublishManyAssetsArgs {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationUnpublishManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationUnpublishManyCategoriesArgs {
  from?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
}


export interface MutationUnpublishManyCategoriesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
}


export interface MutationUnpublishManyFooterItemsArgs {
  from?: Array<Stage>;
  where?: InputMaybe<FooterItemManyWhereInput>;
}


export interface MutationUnpublishManyFooterItemsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<FooterItemManyWhereInput>;
}


export interface MutationUnpublishManyHomesArgs {
  from?: Array<Stage>;
  where?: InputMaybe<HomeManyWhereInput>;
}


export interface MutationUnpublishManyHomesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<HomeManyWhereInput>;
}


export interface MutationUnpublishManyNavbarItemsArgs {
  from?: Array<Stage>;
  where?: InputMaybe<NavbarItemManyWhereInput>;
}


export interface MutationUnpublishManyNavbarItemsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NavbarItemManyWhereInput>;
}


export interface MutationUnpublishManyProductHighlightsArgs {
  from?: Array<Stage>;
  where?: InputMaybe<ProductHighlightManyWhereInput>;
}


export interface MutationUnpublishManyProductHighlightsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductHighlightManyWhereInput>;
}


export interface MutationUnpublishManyProductsArgs {
  from?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
}


export interface MutationUnpublishManyProductsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
}


export interface MutationUnpublishManySocialNetworksArgs {
  from?: Array<Stage>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
}


export interface MutationUnpublishManySocialNetworksConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
}


export interface MutationUnpublishManyTextContentsArgs {
  from?: Array<Stage>;
  where?: InputMaybe<TextContentManyWhereInput>;
}


export interface MutationUnpublishManyTextContentsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TextContentManyWhereInput>;
}


export interface MutationUnpublishNavbarItemArgs {
  from?: Array<Stage>;
  where: NavbarItemWhereUniqueInput;
}


export interface MutationUnpublishProductArgs {
  from?: Array<Stage>;
  where: ProductWhereUniqueInput;
}


export interface MutationUnpublishProductHighlightArgs {
  from?: Array<Stage>;
  where: ProductHighlightWhereUniqueInput;
}


export interface MutationUnpublishSocialNetworkArgs {
  from?: Array<Stage>;
  where: SocialNetworkWhereUniqueInput;
}


export interface MutationUnpublishTextContentArgs {
  from?: Array<Stage>;
  where: TextContentWhereUniqueInput;
}


export interface MutationUpdateAssetArgs {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
}


export interface MutationUpdateCategoryArgs {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
}


export interface MutationUpdateFooterItemArgs {
  data: FooterItemUpdateInput;
  where: FooterItemWhereUniqueInput;
}


export interface MutationUpdateHomeArgs {
  data: HomeUpdateInput;
  where: HomeWhereUniqueInput;
}


export interface MutationUpdateManyAssetsArgs {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationUpdateManyAssetsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
}


export interface MutationUpdateManyCategoriesArgs {
  data: CategoryUpdateManyInput;
  where?: InputMaybe<CategoryManyWhereInput>;
}


export interface MutationUpdateManyCategoriesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CategoryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CategoryManyWhereInput>;
}


export interface MutationUpdateManyFooterItemsArgs {
  data: FooterItemUpdateManyInput;
  where?: InputMaybe<FooterItemManyWhereInput>;
}


export interface MutationUpdateManyFooterItemsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: FooterItemUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterItemManyWhereInput>;
}


export interface MutationUpdateManyHomesArgs {
  data: HomeUpdateManyInput;
  where?: InputMaybe<HomeManyWhereInput>;
}


export interface MutationUpdateManyHomesConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: HomeUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<HomeManyWhereInput>;
}


export interface MutationUpdateManyNavbarItemsArgs {
  data: NavbarItemUpdateManyInput;
  where?: InputMaybe<NavbarItemManyWhereInput>;
}


export interface MutationUpdateManyNavbarItemsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: NavbarItemUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavbarItemManyWhereInput>;
}


export interface MutationUpdateManyProductHighlightsArgs {
  data: ProductHighlightUpdateManyInput;
  where?: InputMaybe<ProductHighlightManyWhereInput>;
}


export interface MutationUpdateManyProductHighlightsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ProductHighlightUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductHighlightManyWhereInput>;
}


export interface MutationUpdateManyProductsArgs {
  data: ProductUpdateManyInput;
  where?: InputMaybe<ProductManyWhereInput>;
}


export interface MutationUpdateManyProductsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ProductUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProductManyWhereInput>;
}


export interface MutationUpdateManySocialNetworksArgs {
  data: SocialNetworkUpdateManyInput;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
}


export interface MutationUpdateManySocialNetworksConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: SocialNetworkUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SocialNetworkManyWhereInput>;
}


export interface MutationUpdateManyTextContentsArgs {
  data: TextContentUpdateManyInput;
  where?: InputMaybe<TextContentManyWhereInput>;
}


export interface MutationUpdateManyTextContentsConnectionArgs {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TextContentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TextContentManyWhereInput>;
}


export interface MutationUpdateNavbarItemArgs {
  data: NavbarItemUpdateInput;
  where: NavbarItemWhereUniqueInput;
}


export interface MutationUpdateProductArgs {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
}


export interface MutationUpdateProductHighlightArgs {
  data: ProductHighlightUpdateInput;
  where: ProductHighlightWhereUniqueInput;
}


export interface MutationUpdateScheduledReleaseArgs {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
}


export interface MutationUpdateSocialNetworkArgs {
  data: SocialNetworkUpdateInput;
  where: SocialNetworkWhereUniqueInput;
}


export interface MutationUpdateTextContentArgs {
  data: TextContentUpdateInput;
  where: TextContentWhereUniqueInput;
}


export interface MutationUpsertAssetArgs {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
}


export interface MutationUpsertCategoryArgs {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
}


export interface MutationUpsertFooterItemArgs {
  upsert: FooterItemUpsertInput;
  where: FooterItemWhereUniqueInput;
}


export interface MutationUpsertHomeArgs {
  upsert: HomeUpsertInput;
  where: HomeWhereUniqueInput;
}


export interface MutationUpsertNavbarItemArgs {
  upsert: NavbarItemUpsertInput;
  where: NavbarItemWhereUniqueInput;
}


export interface MutationUpsertProductArgs {
  upsert: ProductUpsertInput;
  where: ProductWhereUniqueInput;
}


export interface MutationUpsertProductHighlightArgs {
  upsert: ProductHighlightUpsertInput;
  where: ProductHighlightWhereUniqueInput;
}


export interface MutationUpsertSocialNetworkArgs {
  upsert: SocialNetworkUpsertInput;
  where: SocialNetworkWhereUniqueInput;
}


export interface MutationUpsertTextContentArgs {
  upsert: TextContentUpsertInput;
  where: TextContentWhereUniqueInput;
}

export interface NavbarItem extends Node {
  __typename?: 'NavbarItem';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  displayText: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<NavbarItem>;
  /** List of NavbarItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  order?: Maybe<Scalars['Int']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  redirectTo?: Maybe<Scalars['String']>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
}


export interface NavbarItemCreatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface NavbarItemDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}


export interface NavbarItemHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
}


export interface NavbarItemPublishedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface NavbarItemScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface NavbarItemUpdatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}

export interface NavbarItemConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NavbarItemWhereUniqueInput;
}

/** A connection to a list of items. */
export interface NavbarItemConnection {
  __typename?: 'NavbarItemConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NavbarItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface NavbarItemCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayText: Scalars['String'];
  order?: InputMaybe<Scalars['Int']>;
  redirectTo?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface NavbarItemCreateManyInlineInput {
  /** Connect multiple existing NavbarItem documents */
  connect?: InputMaybe<Array<NavbarItemWhereUniqueInput>>;
  /** Create and connect multiple existing NavbarItem documents */
  create?: InputMaybe<Array<NavbarItemCreateInput>>;
}

export interface NavbarItemCreateOneInlineInput {
  /** Connect one existing NavbarItem document */
  connect?: InputMaybe<NavbarItemWhereUniqueInput>;
  /** Create and connect one NavbarItem document */
  create?: InputMaybe<NavbarItemCreateInput>;
}

/** An edge in a connection. */
export interface NavbarItemEdge {
  __typename?: 'NavbarItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: NavbarItem;
}

/** Identifies documents */
export interface NavbarItemManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavbarItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavbarItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavbarItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  displayText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  displayText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  displayText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  displayText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  displayText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  displayText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  displayText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  displayText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  displayText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  displayText_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  redirectTo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  redirectTo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  redirectTo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  redirectTo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  redirectTo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  redirectTo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  redirectTo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  redirectTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  redirectTo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  redirectTo_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum NavbarItemOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DisplayTextAsc = 'displayText_ASC',
  DisplayTextDesc = 'displayText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RedirectToAsc = 'redirectTo_ASC',
  RedirectToDesc = 'redirectTo_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface NavbarItemUpdateInput {
  displayText?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  redirectTo?: InputMaybe<Scalars['String']>;
}

export interface NavbarItemUpdateManyInlineInput {
  /** Connect multiple existing NavbarItem documents */
  connect?: InputMaybe<Array<NavbarItemConnectInput>>;
  /** Create and connect multiple NavbarItem documents */
  create?: InputMaybe<Array<NavbarItemCreateInput>>;
  /** Delete multiple NavbarItem documents */
  delete?: InputMaybe<Array<NavbarItemWhereUniqueInput>>;
  /** Disconnect multiple NavbarItem documents */
  disconnect?: InputMaybe<Array<NavbarItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NavbarItem documents */
  set?: InputMaybe<Array<NavbarItemWhereUniqueInput>>;
  /** Update multiple NavbarItem documents */
  update?: InputMaybe<Array<NavbarItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NavbarItem documents */
  upsert?: InputMaybe<Array<NavbarItemUpsertWithNestedWhereUniqueInput>>;
}

export interface NavbarItemUpdateManyInput {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
}

export interface NavbarItemUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: NavbarItemUpdateManyInput;
  /** Document search */
  where: NavbarItemWhereInput;
}

export interface NavbarItemUpdateOneInlineInput {
  /** Connect existing NavbarItem document */
  connect?: InputMaybe<NavbarItemWhereUniqueInput>;
  /** Create and connect one NavbarItem document */
  create?: InputMaybe<NavbarItemCreateInput>;
  /** Delete currently connected NavbarItem document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected NavbarItem document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single NavbarItem document */
  update?: InputMaybe<NavbarItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NavbarItem document */
  upsert?: InputMaybe<NavbarItemUpsertWithNestedWhereUniqueInput>;
}

export interface NavbarItemUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: NavbarItemUpdateInput;
  /** Unique document search */
  where: NavbarItemWhereUniqueInput;
}

export interface NavbarItemUpsertInput {
  /** Create document if it didn't exist */
  create: NavbarItemCreateInput;
  /** Update document if it exists */
  update: NavbarItemUpdateInput;
}

export interface NavbarItemUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: NavbarItemUpsertInput;
  /** Unique document search */
  where: NavbarItemWhereUniqueInput;
}

/** Identifies documents */
export interface NavbarItemWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavbarItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavbarItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavbarItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  displayText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  displayText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  displayText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  displayText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  displayText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  displayText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  displayText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  displayText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  displayText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  displayText_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  redirectTo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  redirectTo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  redirectTo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  redirectTo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  redirectTo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  redirectTo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  redirectTo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  redirectTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  redirectTo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  redirectTo_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References NavbarItem record uniquely */
export interface NavbarItemWhereUniqueInput {
  displayText?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
  redirectTo?: InputMaybe<Scalars['String']>;
}

/** An object with an ID */
export interface Node {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
}

/** Information about pagination in a connection. */
export interface PageInfo {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
}

export interface Product extends Node {
  __typename?: 'Product';
  category?: Maybe<Category>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars['String'];
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  /** List of Product versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  images: Array<Asset>;
  info?: Maybe<RichText>;
  name: Scalars['String'];
  price: Scalars['Float'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  showNewProductTag?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  smallDescription: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
}


export interface ProductCategoryArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface ProductCreatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface ProductDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}


export interface ProductHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
}


export interface ProductImagesArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetWhereInput>;
}


export interface ProductPublishedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface ProductScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface ProductUpdatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}

export interface ProductConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
}

/** A connection to a list of items. */
export interface ProductConnection {
  __typename?: 'ProductConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface ProductCreateInput {
  category?: InputMaybe<CategoryCreateOneInlineInput>;
  cl7py94uy4lp101t747cydwfj?: InputMaybe<ProductHighlightCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  images: AssetCreateManyInlineInput;
  info?: InputMaybe<Scalars['RichTextAST']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  showNewProductTag?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  smallDescription: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface ProductCreateManyInlineInput {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
}

export interface ProductCreateOneInlineInput {
  /** Connect one existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
}

/** An edge in a connection. */
export interface ProductEdge {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Product;
}

export interface ProductHighlight extends Node {
  __typename?: 'ProductHighlight';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ProductHighlight>;
  /** List of ProductHighlight versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  image: Asset;
  isActive: Scalars['Boolean'];
  order: Scalars['Int'];
  product?: Maybe<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
}


export interface ProductHighlightCreatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface ProductHighlightDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}


export interface ProductHighlightHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
}


export interface ProductHighlightImageArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface ProductHighlightProductArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface ProductHighlightPublishedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface ProductHighlightScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface ProductHighlightUpdatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}

export interface ProductHighlightConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductHighlightWhereUniqueInput;
}

/** A connection to a list of items. */
export interface ProductHighlightConnection {
  __typename?: 'ProductHighlightConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductHighlightEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface ProductHighlightCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  image: AssetCreateOneInlineInput;
  isActive: Scalars['Boolean'];
  order: Scalars['Int'];
  product?: InputMaybe<ProductCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface ProductHighlightCreateManyInlineInput {
  /** Connect multiple existing ProductHighlight documents */
  connect?: InputMaybe<Array<ProductHighlightWhereUniqueInput>>;
  /** Create and connect multiple existing ProductHighlight documents */
  create?: InputMaybe<Array<ProductHighlightCreateInput>>;
}

export interface ProductHighlightCreateOneInlineInput {
  /** Connect one existing ProductHighlight document */
  connect?: InputMaybe<ProductHighlightWhereUniqueInput>;
  /** Create and connect one ProductHighlight document */
  create?: InputMaybe<ProductHighlightCreateInput>;
}

/** An edge in a connection. */
export interface ProductHighlightEdge {
  __typename?: 'ProductHighlightEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ProductHighlight;
}

/** Identifies documents */
export interface ProductHighlightManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum ProductHighlightOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface ProductHighlightUpdateInput {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<ProductUpdateOneInlineInput>;
}

export interface ProductHighlightUpdateManyInlineInput {
  /** Connect multiple existing ProductHighlight documents */
  connect?: InputMaybe<Array<ProductHighlightConnectInput>>;
  /** Create and connect multiple ProductHighlight documents */
  create?: InputMaybe<Array<ProductHighlightCreateInput>>;
  /** Delete multiple ProductHighlight documents */
  delete?: InputMaybe<Array<ProductHighlightWhereUniqueInput>>;
  /** Disconnect multiple ProductHighlight documents */
  disconnect?: InputMaybe<Array<ProductHighlightWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductHighlight documents */
  set?: InputMaybe<Array<ProductHighlightWhereUniqueInput>>;
  /** Update multiple ProductHighlight documents */
  update?: InputMaybe<Array<ProductHighlightUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ProductHighlight documents */
  upsert?: InputMaybe<Array<ProductHighlightUpsertWithNestedWhereUniqueInput>>;
}

export interface ProductHighlightUpdateManyInput {
  isActive?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
}

export interface ProductHighlightUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ProductHighlightUpdateManyInput;
  /** Document search */
  where: ProductHighlightWhereInput;
}

export interface ProductHighlightUpdateOneInlineInput {
  /** Connect existing ProductHighlight document */
  connect?: InputMaybe<ProductHighlightWhereUniqueInput>;
  /** Create and connect one ProductHighlight document */
  create?: InputMaybe<ProductHighlightCreateInput>;
  /** Delete currently connected ProductHighlight document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ProductHighlight document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ProductHighlight document */
  update?: InputMaybe<ProductHighlightUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductHighlight document */
  upsert?: InputMaybe<ProductHighlightUpsertWithNestedWhereUniqueInput>;
}

export interface ProductHighlightUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ProductHighlightUpdateInput;
  /** Unique document search */
  where: ProductHighlightWhereUniqueInput;
}

export interface ProductHighlightUpsertInput {
  /** Create document if it didn't exist */
  create: ProductHighlightCreateInput;
  /** Update document if it exists */
  update: ProductHighlightUpdateInput;
}

export interface ProductHighlightUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ProductHighlightUpsertInput;
  /** Unique document search */
  where: ProductHighlightWhereUniqueInput;
}

/** Identifies documents */
export interface ProductHighlightWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductHighlightWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References ProductHighlight record uniquely */
export interface ProductHighlightWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

/** Identifies documents */
export interface ProductManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<CategoryWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  showNewProductTag?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  showNewProductTag_not?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  smallDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  smallDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  smallDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  smallDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  smallDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  smallDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  smallDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  smallDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  smallDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  smallDescription_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum ProductOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ShowNewProductTagAsc = 'showNewProductTag_ASC',
  ShowNewProductTagDesc = 'showNewProductTag_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SmallDescriptionAsc = 'smallDescription_ASC',
  SmallDescriptionDesc = 'smallDescription_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface ProductUpdateInput {
  category?: InputMaybe<CategoryUpdateOneInlineInput>;
  cl7py94uy4lp101t747cydwfj?: InputMaybe<ProductHighlightUpdateManyInlineInput>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<AssetUpdateManyInlineInput>;
  info?: InputMaybe<Scalars['RichTextAST']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  showNewProductTag?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  smallDescription?: InputMaybe<Scalars['String']>;
}

export interface ProductUpdateManyInlineInput {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
}

export interface ProductUpdateManyInput {
  description?: InputMaybe<Scalars['String']>;
  info?: InputMaybe<Scalars['RichTextAST']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  showNewProductTag?: InputMaybe<Scalars['Boolean']>;
  smallDescription?: InputMaybe<Scalars['String']>;
}

export interface ProductUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
}

export interface ProductUpdateOneInlineInput {
  /** Connect existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
}

export interface ProductUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
}

export interface ProductUpsertInput {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
}

export interface ProductUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
}

/** Identifies documents */
export interface ProductWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<CategoryWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  price_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  showNewProductTag?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  showNewProductTag_not?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  smallDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  smallDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  smallDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  smallDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  smallDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  smallDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  smallDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  smallDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  smallDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  smallDescription_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References Product record uniquely */
export interface ProductWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
}

export interface PublishLocaleInput {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
}

export interface Query {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve a single category */
  category?: Maybe<Category>;
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single footerItem */
  footerItem?: Maybe<FooterItem>;
  /** Retrieve document version */
  footerItemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple footerItems */
  footerItems: Array<FooterItem>;
  /** Retrieve multiple footerItems using the Relay connection interface */
  footerItemsConnection: FooterItemConnection;
  /** Retrieve a single home */
  home?: Maybe<Home>;
  /** Retrieve document version */
  homeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple homes */
  homes: Array<Home>;
  /** Retrieve multiple homes using the Relay connection interface */
  homesConnection: HomeConnection;
  /** Retrieve a single navbarItem */
  navbarItem?: Maybe<NavbarItem>;
  /** Retrieve document version */
  navbarItemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple navbarItems */
  navbarItems: Array<NavbarItem>;
  /** Retrieve multiple navbarItems using the Relay connection interface */
  navbarItemsConnection: NavbarItemConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve a single productHighlight */
  productHighlight?: Maybe<ProductHighlight>;
  /** Retrieve document version */
  productHighlightVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple productHighlights */
  productHighlights: Array<ProductHighlight>;
  /** Retrieve multiple productHighlights using the Relay connection interface */
  productHighlightsConnection: ProductHighlightConnection;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single socialNetwork */
  socialNetwork?: Maybe<SocialNetwork>;
  /** Retrieve document version */
  socialNetworkVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple socialNetworks */
  socialNetworks: Array<SocialNetwork>;
  /** Retrieve multiple socialNetworks using the Relay connection interface */
  socialNetworksConnection: SocialNetworkConnection;
  /** Retrieve a single textContent */
  textContent?: Maybe<TextContent>;
  /** Retrieve document version */
  textContentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple textContents */
  textContents: Array<TextContent>;
  /** Retrieve multiple textContents using the Relay connection interface */
  textContentsConnection: TextContentConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
}


export interface QueryAssetArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
}


export interface QueryAssetVersionArgs {
  where: VersionWhereInput;
}


export interface QueryAssetsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
}


export interface QueryAssetsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
}


export interface QueryCategoriesArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
}


export interface QueryCategoriesConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
}


export interface QueryCategoryArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
}


export interface QueryCategoryVersionArgs {
  where: VersionWhereInput;
}


export interface QueryFooterItemArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FooterItemWhereUniqueInput;
}


export interface QueryFooterItemVersionArgs {
  where: VersionWhereInput;
}


export interface QueryFooterItemsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FooterItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FooterItemWhereInput>;
}


export interface QueryFooterItemsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FooterItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FooterItemWhereInput>;
}


export interface QueryHomeArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: HomeWhereUniqueInput;
}


export interface QueryHomeVersionArgs {
  where: VersionWhereInput;
}


export interface QueryHomesArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<HomeWhereInput>;
}


export interface QueryHomesConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<HomeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<HomeWhereInput>;
}


export interface QueryNavbarItemArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NavbarItemWhereUniqueInput;
}


export interface QueryNavbarItemVersionArgs {
  where: VersionWhereInput;
}


export interface QueryNavbarItemsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavbarItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavbarItemWhereInput>;
}


export interface QueryNavbarItemsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NavbarItemOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NavbarItemWhereInput>;
}


export interface QueryNodeArgs {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
}


export interface QueryProductArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductWhereUniqueInput;
}


export interface QueryProductHighlightArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductHighlightWhereUniqueInput;
}


export interface QueryProductHighlightVersionArgs {
  where: VersionWhereInput;
}


export interface QueryProductHighlightsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductHighlightOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductHighlightWhereInput>;
}


export interface QueryProductHighlightsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductHighlightOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductHighlightWhereInput>;
}


export interface QueryProductVersionArgs {
  where: VersionWhereInput;
}


export interface QueryProductsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
}


export interface QueryProductsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
}


export interface QueryScheduledOperationArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
}


export interface QueryScheduledOperationsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface QueryScheduledOperationsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface QueryScheduledReleaseArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
}


export interface QueryScheduledReleasesArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
}


export interface QueryScheduledReleasesConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
}


export interface QuerySocialNetworkArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SocialNetworkWhereUniqueInput;
}


export interface QuerySocialNetworkVersionArgs {
  where: VersionWhereInput;
}


export interface QuerySocialNetworksArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SocialNetworkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SocialNetworkWhereInput>;
}


export interface QuerySocialNetworksConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SocialNetworkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SocialNetworkWhereInput>;
}


export interface QueryTextContentArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TextContentWhereUniqueInput;
}


export interface QueryTextContentVersionArgs {
  where: VersionWhereInput;
}


export interface QueryTextContentsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TextContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TextContentWhereInput>;
}


export interface QueryTextContentsConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TextContentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TextContentWhereInput>;
}


export interface QueryUserArgs {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
}


export interface QueryUsersArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
}


export interface QueryUsersConnectionArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface Rgba {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface RgbaInput {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export interface RichText {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
}

/** Scheduled Operation system model */
export interface ScheduledOperation extends Node {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
}


/** Scheduled Operation system model */
export interface ScheduledOperationAffectedDocumentsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
}


/** Scheduled Operation system model */
export interface ScheduledOperationCreatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


/** Scheduled Operation system model */
export interface ScheduledOperationDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}


/** Scheduled Operation system model */
export interface ScheduledOperationPublishedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


/** Scheduled Operation system model */
export interface ScheduledOperationReleaseArgs {
  locales?: InputMaybe<Array<Locale>>;
}


/** Scheduled Operation system model */
export interface ScheduledOperationUpdatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}

export type ScheduledOperationAffectedDocument = Asset | Category | FooterItem | Home | NavbarItem | Product | ProductHighlight | SocialNetwork | TextContent;

export interface ScheduledOperationConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
}

/** A connection to a list of items. */
export interface ScheduledOperationConnection {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface ScheduledOperationCreateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
}

export interface ScheduledOperationCreateOneInlineInput {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
}

/** An edge in a connection. */
export interface ScheduledOperationEdge {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
}

/** Identifies documents */
export interface ScheduledOperationManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export interface ScheduledOperationUpdateManyInlineInput {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
}

export interface ScheduledOperationUpdateOneInlineInput {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface ScheduledOperationWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References ScheduledOperation record uniquely */
export interface ScheduledOperationWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

/** Scheduled Release system model */
export interface ScheduledRelease extends Node {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
}


/** Scheduled Release system model */
export interface ScheduledReleaseCreatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


/** Scheduled Release system model */
export interface ScheduledReleaseDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}


/** Scheduled Release system model */
export interface ScheduledReleaseOperationsArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


/** Scheduled Release system model */
export interface ScheduledReleasePublishedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


/** Scheduled Release system model */
export interface ScheduledReleaseUpdatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}

export interface ScheduledReleaseConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
}

/** A connection to a list of items. */
export interface ScheduledReleaseConnection {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface ScheduledReleaseCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface ScheduledReleaseCreateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
}

export interface ScheduledReleaseCreateOneInlineInput {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
}

/** An edge in a connection. */
export interface ScheduledReleaseEdge {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
}

/** Identifies documents */
export interface ScheduledReleaseManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export interface ScheduledReleaseUpdateInput {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ScheduledReleaseUpdateManyInlineInput {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
}

export interface ScheduledReleaseUpdateManyInput {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
}

export interface ScheduledReleaseUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
}

export interface ScheduledReleaseUpdateOneInlineInput {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
}

export interface ScheduledReleaseUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
}

export interface ScheduledReleaseUpsertInput {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
}

export interface ScheduledReleaseUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
}

/** Identifies documents */
export interface ScheduledReleaseWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References ScheduledRelease record uniquely */
export interface ScheduledReleaseWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface SocialNetwork extends Node {
  __typename?: 'SocialNetwork';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<SocialNetwork>;
  /** List of SocialNetwork versions */
  history: Array<Version>;
  icon: Asset;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  redirectTo: Scalars['String'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
}


export interface SocialNetworkCreatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface SocialNetworkDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}


export interface SocialNetworkHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
}


export interface SocialNetworkIconArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface SocialNetworkPublishedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface SocialNetworkScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface SocialNetworkUpdatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}

export interface SocialNetworkConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SocialNetworkWhereUniqueInput;
}

/** A connection to a list of items. */
export interface SocialNetworkConnection {
  __typename?: 'SocialNetworkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SocialNetworkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface SocialNetworkCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  icon: AssetCreateOneInlineInput;
  name: Scalars['String'];
  redirectTo: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}

export interface SocialNetworkCreateManyInlineInput {
  /** Connect multiple existing SocialNetwork documents */
  connect?: InputMaybe<Array<SocialNetworkWhereUniqueInput>>;
  /** Create and connect multiple existing SocialNetwork documents */
  create?: InputMaybe<Array<SocialNetworkCreateInput>>;
}

export interface SocialNetworkCreateOneInlineInput {
  /** Connect one existing SocialNetwork document */
  connect?: InputMaybe<SocialNetworkWhereUniqueInput>;
  /** Create and connect one SocialNetwork document */
  create?: InputMaybe<SocialNetworkCreateInput>;
}

/** An edge in a connection. */
export interface SocialNetworkEdge {
  __typename?: 'SocialNetworkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: SocialNetwork;
}

/** Identifies documents */
export interface SocialNetworkManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  redirectTo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  redirectTo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  redirectTo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  redirectTo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  redirectTo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  redirectTo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  redirectTo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  redirectTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  redirectTo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  redirectTo_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

export enum SocialNetworkOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RedirectToAsc = 'redirectTo_ASC',
  RedirectToDesc = 'redirectTo_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface SocialNetworkUpdateInput {
  icon?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  redirectTo?: InputMaybe<Scalars['String']>;
}

export interface SocialNetworkUpdateManyInlineInput {
  /** Connect multiple existing SocialNetwork documents */
  connect?: InputMaybe<Array<SocialNetworkConnectInput>>;
  /** Create and connect multiple SocialNetwork documents */
  create?: InputMaybe<Array<SocialNetworkCreateInput>>;
  /** Delete multiple SocialNetwork documents */
  delete?: InputMaybe<Array<SocialNetworkWhereUniqueInput>>;
  /** Disconnect multiple SocialNetwork documents */
  disconnect?: InputMaybe<Array<SocialNetworkWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing SocialNetwork documents */
  set?: InputMaybe<Array<SocialNetworkWhereUniqueInput>>;
  /** Update multiple SocialNetwork documents */
  update?: InputMaybe<Array<SocialNetworkUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple SocialNetwork documents */
  upsert?: InputMaybe<Array<SocialNetworkUpsertWithNestedWhereUniqueInput>>;
}

export interface SocialNetworkUpdateManyInput {
  name?: InputMaybe<Scalars['String']>;
  redirectTo?: InputMaybe<Scalars['String']>;
}

export interface SocialNetworkUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: SocialNetworkUpdateManyInput;
  /** Document search */
  where: SocialNetworkWhereInput;
}

export interface SocialNetworkUpdateOneInlineInput {
  /** Connect existing SocialNetwork document */
  connect?: InputMaybe<SocialNetworkWhereUniqueInput>;
  /** Create and connect one SocialNetwork document */
  create?: InputMaybe<SocialNetworkCreateInput>;
  /** Delete currently connected SocialNetwork document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected SocialNetwork document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single SocialNetwork document */
  update?: InputMaybe<SocialNetworkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single SocialNetwork document */
  upsert?: InputMaybe<SocialNetworkUpsertWithNestedWhereUniqueInput>;
}

export interface SocialNetworkUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: SocialNetworkUpdateInput;
  /** Unique document search */
  where: SocialNetworkWhereUniqueInput;
}

export interface SocialNetworkUpsertInput {
  /** Create document if it didn't exist */
  create: SocialNetworkCreateInput;
  /** Update document if it exists */
  update: SocialNetworkUpdateInput;
}

export interface SocialNetworkUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: SocialNetworkUpsertInput;
  /** Unique document search */
  where: SocialNetworkWhereUniqueInput;
}

/** Identifies documents */
export interface SocialNetworkWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialNetworkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  icon?: InputMaybe<AssetWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  redirectTo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  redirectTo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  redirectTo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  redirectTo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  redirectTo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  redirectTo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  redirectTo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  redirectTo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  redirectTo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  redirectTo_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
}

/** References SocialNetwork record uniquely */
export interface SocialNetworkWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export interface TextContent extends Node {
  __typename?: 'TextContent';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<TextContent>;
  /** List of TextContent versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  value: Scalars['String'];
}


export interface TextContentCreatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface TextContentDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}


export interface TextContentHistoryArgs {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
}


export interface TextContentPublishedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}


export interface TextContentScheduledInArgs {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
}


export interface TextContentUpdatedByArgs {
  locales?: InputMaybe<Array<Locale>>;
}

export interface TextContentConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TextContentWhereUniqueInput;
}

/** A connection to a list of items. */
export interface TextContentConnection {
  __typename?: 'TextContentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TextContentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface TextContentCreateInput {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value: Scalars['String'];
}

export interface TextContentCreateManyInlineInput {
  /** Connect multiple existing TextContent documents */
  connect?: InputMaybe<Array<TextContentWhereUniqueInput>>;
  /** Create and connect multiple existing TextContent documents */
  create?: InputMaybe<Array<TextContentCreateInput>>;
}

export interface TextContentCreateOneInlineInput {
  /** Connect one existing TextContent document */
  connect?: InputMaybe<TextContentWhereUniqueInput>;
  /** Create and connect one TextContent document */
  create?: InputMaybe<TextContentCreateInput>;
}

/** An edge in a connection. */
export interface TextContentEdge {
  __typename?: 'TextContentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: TextContent;
}

/** Identifies documents */
export interface TextContentManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']>;
}

export enum TextContentOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export interface TextContentUpdateInput {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface TextContentUpdateManyInlineInput {
  /** Connect multiple existing TextContent documents */
  connect?: InputMaybe<Array<TextContentConnectInput>>;
  /** Create and connect multiple TextContent documents */
  create?: InputMaybe<Array<TextContentCreateInput>>;
  /** Delete multiple TextContent documents */
  delete?: InputMaybe<Array<TextContentWhereUniqueInput>>;
  /** Disconnect multiple TextContent documents */
  disconnect?: InputMaybe<Array<TextContentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TextContent documents */
  set?: InputMaybe<Array<TextContentWhereUniqueInput>>;
  /** Update multiple TextContent documents */
  update?: InputMaybe<Array<TextContentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TextContent documents */
  upsert?: InputMaybe<Array<TextContentUpsertWithNestedWhereUniqueInput>>;
}

export interface TextContentUpdateManyInput {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
}

export interface TextContentUpdateManyWithNestedWhereInput {
  /** Update many input */
  data: TextContentUpdateManyInput;
  /** Document search */
  where: TextContentWhereInput;
}

export interface TextContentUpdateOneInlineInput {
  /** Connect existing TextContent document */
  connect?: InputMaybe<TextContentWhereUniqueInput>;
  /** Create and connect one TextContent document */
  create?: InputMaybe<TextContentCreateInput>;
  /** Delete currently connected TextContent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected TextContent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single TextContent document */
  update?: InputMaybe<TextContentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TextContent document */
  upsert?: InputMaybe<TextContentUpsertWithNestedWhereUniqueInput>;
}

export interface TextContentUpdateWithNestedWhereUniqueInput {
  /** Document to update */
  data: TextContentUpdateInput;
  /** Unique document search */
  where: TextContentWhereUniqueInput;
}

export interface TextContentUpsertInput {
  /** Create document if it didn't exist */
  create: TextContentCreateInput;
  /** Update document if it exists */
  update: TextContentUpdateInput;
}

export interface TextContentUpsertWithNestedWhereUniqueInput {
  /** Upsert data */
  data: TextContentUpsertInput;
  /** Unique document search */
  where: TextContentWhereUniqueInput;
}

/** Identifies documents */
export interface TextContentWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextContentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextContentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextContentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']>;
}

/** References TextContent record uniquely */
export interface TextContentWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface UnpublishLocaleInput {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
}

/** User system model */
export interface User extends Node {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
}


/** User system model */
export interface UserDocumentInStagesArgs {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
}

export interface UserConnectInput {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
}

/** A connection to a list of items. */
export interface UserConnection {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
}

export interface UserCreateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
}

export interface UserCreateOneInlineInput {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
}

/** An edge in a connection. */
export interface UserEdge {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
}

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export interface UserManyWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export interface UserUpdateManyInlineInput {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
}

export interface UserUpdateOneInlineInput {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
}

/** Identifies documents */
export interface UserWhereInput {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
}

/** References User record uniquely */
export interface UserWhereUniqueInput {
  id?: InputMaybe<Scalars['ID']>;
}

export interface Version {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
}

export interface VersionWhereInput {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, slug: string, image: { __typename?: 'Asset', url: string } }> };

export type FooterItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterItemsQuery = { __typename?: 'Query', footerItems: Array<{ __typename?: 'FooterItem', id: string, displayText: string, redirectTo: string, order: number }> };

export type NavbarItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type NavbarItemsQuery = { __typename?: 'Query', navbarItems: Array<{ __typename?: 'NavbarItem', id: string, displayText: string, redirectTo?: string | null, order?: number | null }> };

export type ProductHighlightsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductHighlightsQuery = { __typename?: 'Query', productHighlights: Array<{ __typename?: 'ProductHighlight', id: string, order: number, product?: { __typename?: 'Product', id: string, name: string, slug?: string | null, smallDescription: string, showNewProductTag?: boolean | null } | null, image: { __typename?: 'Asset', url: string } }> };

export type ProductQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', description: string, name: string, price: number, showNewProductTag?: boolean | null, images: Array<{ __typename?: 'Asset', url: string }> } | null };

export type SocialNetworksQueryVariables = Exact<{ [key: string]: never; }>;


export type SocialNetworksQuery = { __typename?: 'Query', socialNetworks: Array<{ __typename?: 'SocialNetwork', id: string, name: string, redirectTo: string, icon: { __typename?: 'Asset', url: string } }> };

export type TextContentsQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type TextContentsQuery = { __typename?: 'Query', textContents: Array<{ __typename?: 'TextContent', value: string }> };


export const CategoriesDocument = gql`
    query categories {
  categories {
    id
    name
    slug
    image {
      url
    }
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const FooterItemsDocument = gql`
    query FooterItems {
  footerItems(orderBy: order_ASC) {
    id
    displayText
    redirectTo
    order
  }
}
    `;

/**
 * __useFooterItemsQuery__
 *
 * To run a query within a React component, call `useFooterItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFooterItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFooterItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFooterItemsQuery(baseOptions?: Apollo.QueryHookOptions<FooterItemsQuery, FooterItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FooterItemsQuery, FooterItemsQueryVariables>(FooterItemsDocument, options);
      }
export function useFooterItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FooterItemsQuery, FooterItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FooterItemsQuery, FooterItemsQueryVariables>(FooterItemsDocument, options);
        }
export type FooterItemsQueryHookResult = ReturnType<typeof useFooterItemsQuery>;
export type FooterItemsLazyQueryHookResult = ReturnType<typeof useFooterItemsLazyQuery>;
export type FooterItemsQueryResult = Apollo.QueryResult<FooterItemsQuery, FooterItemsQueryVariables>;
export const NavbarItemsDocument = gql`
    query NavbarItems {
  navbarItems(orderBy: order_ASC) {
    id
    displayText
    redirectTo
    order
  }
}
    `;

/**
 * __useNavbarItemsQuery__
 *
 * To run a query within a React component, call `useNavbarItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavbarItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavbarItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useNavbarItemsQuery(baseOptions?: Apollo.QueryHookOptions<NavbarItemsQuery, NavbarItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NavbarItemsQuery, NavbarItemsQueryVariables>(NavbarItemsDocument, options);
      }
export function useNavbarItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NavbarItemsQuery, NavbarItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NavbarItemsQuery, NavbarItemsQueryVariables>(NavbarItemsDocument, options);
        }
export type NavbarItemsQueryHookResult = ReturnType<typeof useNavbarItemsQuery>;
export type NavbarItemsLazyQueryHookResult = ReturnType<typeof useNavbarItemsLazyQuery>;
export type NavbarItemsQueryResult = Apollo.QueryResult<NavbarItemsQuery, NavbarItemsQueryVariables>;
export const ProductHighlightsDocument = gql`
    query ProductHighlights {
  productHighlights(where: {isActive: true}) {
    id
    order
    product {
      id
      name
      slug
      smallDescription
      showNewProductTag
    }
    image {
      url
    }
  }
}
    `;

/**
 * __useProductHighlightsQuery__
 *
 * To run a query within a React component, call `useProductHighlightsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductHighlightsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductHighlightsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductHighlightsQuery(baseOptions?: Apollo.QueryHookOptions<ProductHighlightsQuery, ProductHighlightsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductHighlightsQuery, ProductHighlightsQueryVariables>(ProductHighlightsDocument, options);
      }
export function useProductHighlightsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductHighlightsQuery, ProductHighlightsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductHighlightsQuery, ProductHighlightsQueryVariables>(ProductHighlightsDocument, options);
        }
export type ProductHighlightsQueryHookResult = ReturnType<typeof useProductHighlightsQuery>;
export type ProductHighlightsLazyQueryHookResult = ReturnType<typeof useProductHighlightsLazyQuery>;
export type ProductHighlightsQueryResult = Apollo.QueryResult<ProductHighlightsQuery, ProductHighlightsQueryVariables>;
export const ProductDocument = gql`
    query product($slug: String) {
  product(where: {slug: $slug}) {
    description
    images {
      url
    }
    name
    price
    showNewProductTag
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProductQuery(baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const SocialNetworksDocument = gql`
    query SocialNetworks {
  socialNetworks {
    id
    name
    redirectTo
    icon {
      url
    }
  }
}
    `;

/**
 * __useSocialNetworksQuery__
 *
 * To run a query within a React component, call `useSocialNetworksQuery` and pass it any options that fit your needs.
 * When your component renders, `useSocialNetworksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialNetworksQuery({
 *   variables: {
 *   },
 * });
 */
export function useSocialNetworksQuery(baseOptions?: Apollo.QueryHookOptions<SocialNetworksQuery, SocialNetworksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SocialNetworksQuery, SocialNetworksQueryVariables>(SocialNetworksDocument, options);
      }
export function useSocialNetworksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SocialNetworksQuery, SocialNetworksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SocialNetworksQuery, SocialNetworksQueryVariables>(SocialNetworksDocument, options);
        }
export type SocialNetworksQueryHookResult = ReturnType<typeof useSocialNetworksQuery>;
export type SocialNetworksLazyQueryHookResult = ReturnType<typeof useSocialNetworksLazyQuery>;
export type SocialNetworksQueryResult = Apollo.QueryResult<SocialNetworksQuery, SocialNetworksQueryVariables>;
export const TextContentsDocument = gql`
    query textContents($name: String!) {
  textContents(where: {name: $name}) {
    value
  }
}
    `;

/**
 * __useTextContentsQuery__
 *
 * To run a query within a React component, call `useTextContentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTextContentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTextContentsQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useTextContentsQuery(baseOptions: Apollo.QueryHookOptions<TextContentsQuery, TextContentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TextContentsQuery, TextContentsQueryVariables>(TextContentsDocument, options);
      }
export function useTextContentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TextContentsQuery, TextContentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TextContentsQuery, TextContentsQueryVariables>(TextContentsDocument, options);
        }
export type TextContentsQueryHookResult = ReturnType<typeof useTextContentsQuery>;
export type TextContentsLazyQueryHookResult = ReturnType<typeof useTextContentsLazyQuery>;
export type TextContentsQueryResult = Apollo.QueryResult<TextContentsQuery, TextContentsQueryVariables>;