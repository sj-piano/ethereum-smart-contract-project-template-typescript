/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface HelloWorldInterface extends Interface {
  getFunction(nameOrSignature: "message" | "update"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "MessageUpdated"): EventFragment;

  encodeFunctionData(functionFragment: "message", values?: undefined): string;
  encodeFunctionData(functionFragment: "update", values: [string]): string;

  decodeFunctionResult(functionFragment: "message", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "update", data: BytesLike): Result;
}

export namespace MessageUpdatedEvent {
  export type InputTuple = [oldStr: string, newStr: string];
  export type OutputTuple = [oldStr: string, newStr: string];
  export interface OutputObject {
    oldStr: string;
    newStr: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface HelloWorld extends BaseContract {
  connect(runner?: ContractRunner | null): HelloWorld;
  waitForDeployment(): Promise<this>;

  interface: HelloWorldInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  message: TypedContractMethod<[], [string], "view">;

  update: TypedContractMethod<[newMessage: string], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "message"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "update"
  ): TypedContractMethod<[newMessage: string], [void], "nonpayable">;

  getEvent(
    key: "MessageUpdated"
  ): TypedContractEvent<
    MessageUpdatedEvent.InputTuple,
    MessageUpdatedEvent.OutputTuple,
    MessageUpdatedEvent.OutputObject
  >;

  filters: {
    "MessageUpdated(string,string)": TypedContractEvent<
      MessageUpdatedEvent.InputTuple,
      MessageUpdatedEvent.OutputTuple,
      MessageUpdatedEvent.OutputObject
    >;
    MessageUpdated: TypedContractEvent<
      MessageUpdatedEvent.InputTuple,
      MessageUpdatedEvent.OutputTuple,
      MessageUpdatedEvent.OutputObject
    >;
  };
}
