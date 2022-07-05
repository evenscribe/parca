// @generated by protobuf-ts 2.7.0 with parameter long_type_string,generate_dependencies
// @generated from protobuf file "parca/debuginfo/v1alpha1/debuginfo.proto" (package "parca.debuginfo.v1alpha1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * ExistsRequest request to determine if debug info exists for a given build_id
 *
 * @generated from protobuf message parca.debuginfo.v1alpha1.ExistsRequest
 */
export interface ExistsRequest {
    /**
     * build_id is a unique identifier for the debug data
     *
     * @generated from protobuf field: string build_id = 1;
     */
    buildId: string;
    /**
     * hash is the hash of the debug information file
     *
     * @generated from protobuf field: string hash = 2;
     */
    hash: string;
}
/**
 * ExistsResponse returns whether the given build_id has debug info
 *
 * @generated from protobuf message parca.debuginfo.v1alpha1.ExistsResponse
 */
export interface ExistsResponse {
    /**
     * exists indicates if there is debug data present for the given build_id
     *
     * @generated from protobuf field: bool exists = 1;
     */
    exists: boolean;
}
/**
 * UploadRequest upload debug info
 *
 * @generated from protobuf message parca.debuginfo.v1alpha1.UploadRequest
 */
export interface UploadRequest {
    /**
     * @generated from protobuf oneof: data
     */
    data: {
        oneofKind: "info";
        /**
         * info is the metadata for the debug info
         *
         * @generated from protobuf field: parca.debuginfo.v1alpha1.UploadInfo info = 1;
         */
        info: UploadInfo;
    } | {
        oneofKind: "chunkData";
        /**
         * chunk_data is the raw bytes of the debug info
         *
         * @generated from protobuf field: bytes chunk_data = 2;
         */
        chunkData: Uint8Array;
    } | {
        oneofKind: undefined;
    };
}
/**
 * UploadInfo contains the build_id and other metadata for the debug data
 *
 * @generated from protobuf message parca.debuginfo.v1alpha1.UploadInfo
 */
export interface UploadInfo {
    /**
     * build_id is a unique identifier for the debug data
     *
     * @generated from protobuf field: string build_id = 1;
     */
    buildId: string;
    /**
     * hash is the hash of the source file that debug information extracted from
     *
     * @generated from protobuf field: string hash = 2;
     */
    hash: string;
}
/**
 * UploadResponse returns the build_id and the size of the uploaded debug info
 *
 * @generated from protobuf message parca.debuginfo.v1alpha1.UploadResponse
 */
export interface UploadResponse {
    /**
     * build_id is a unique identifier for the debug data
     *
     * @generated from protobuf field: string build_id = 1;
     */
    buildId: string;
    /**
     * size is the number of bytes of the debug info
     *
     * @generated from protobuf field: uint64 size = 2;
     */
    size: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class ExistsRequest$Type extends MessageType<ExistsRequest> {
    constructor() {
        super("parca.debuginfo.v1alpha1.ExistsRequest", [
            { no: 1, name: "build_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<ExistsRequest>): ExistsRequest {
        const message = { buildId: "", hash: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExistsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExistsRequest): ExistsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string build_id */ 1:
                    message.buildId = reader.string();
                    break;
                case /* string hash */ 2:
                    message.hash = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ExistsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string build_id = 1; */
        if (message.buildId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.buildId);
        /* string hash = 2; */
        if (message.hash !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.hash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.debuginfo.v1alpha1.ExistsRequest
 */
export const ExistsRequest = new ExistsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExistsResponse$Type extends MessageType<ExistsResponse> {
    constructor() {
        super("parca.debuginfo.v1alpha1.ExistsResponse", [
            { no: 1, name: "exists", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<ExistsResponse>): ExistsResponse {
        const message = { exists: false };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExistsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExistsResponse): ExistsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool exists */ 1:
                    message.exists = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ExistsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool exists = 1; */
        if (message.exists !== false)
            writer.tag(1, WireType.Varint).bool(message.exists);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.debuginfo.v1alpha1.ExistsResponse
 */
export const ExistsResponse = new ExistsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UploadRequest$Type extends MessageType<UploadRequest> {
    constructor() {
        super("parca.debuginfo.v1alpha1.UploadRequest", [
            { no: 1, name: "info", kind: "message", oneof: "data", T: () => UploadInfo },
            { no: 2, name: "chunk_data", kind: "scalar", oneof: "data", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<UploadRequest>): UploadRequest {
        const message = { data: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UploadRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UploadRequest): UploadRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* parca.debuginfo.v1alpha1.UploadInfo info */ 1:
                    message.data = {
                        oneofKind: "info",
                        info: UploadInfo.internalBinaryRead(reader, reader.uint32(), options, (message.data as any).info)
                    };
                    break;
                case /* bytes chunk_data */ 2:
                    message.data = {
                        oneofKind: "chunkData",
                        chunkData: reader.bytes()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UploadRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* parca.debuginfo.v1alpha1.UploadInfo info = 1; */
        if (message.data.oneofKind === "info")
            UploadInfo.internalBinaryWrite(message.data.info, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bytes chunk_data = 2; */
        if (message.data.oneofKind === "chunkData")
            writer.tag(2, WireType.LengthDelimited).bytes(message.data.chunkData);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.debuginfo.v1alpha1.UploadRequest
 */
export const UploadRequest = new UploadRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UploadInfo$Type extends MessageType<UploadInfo> {
    constructor() {
        super("parca.debuginfo.v1alpha1.UploadInfo", [
            { no: 1, name: "build_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<UploadInfo>): UploadInfo {
        const message = { buildId: "", hash: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UploadInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UploadInfo): UploadInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string build_id */ 1:
                    message.buildId = reader.string();
                    break;
                case /* string hash */ 2:
                    message.hash = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UploadInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string build_id = 1; */
        if (message.buildId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.buildId);
        /* string hash = 2; */
        if (message.hash !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.hash);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.debuginfo.v1alpha1.UploadInfo
 */
export const UploadInfo = new UploadInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UploadResponse$Type extends MessageType<UploadResponse> {
    constructor() {
        super("parca.debuginfo.v1alpha1.UploadResponse", [
            { no: 1, name: "build_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "size", kind: "scalar", T: 4 /*ScalarType.UINT64*/ }
        ]);
    }
    create(value?: PartialMessage<UploadResponse>): UploadResponse {
        const message = { buildId: "", size: "0" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UploadResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UploadResponse): UploadResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string build_id */ 1:
                    message.buildId = reader.string();
                    break;
                case /* uint64 size */ 2:
                    message.size = reader.uint64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UploadResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string build_id = 1; */
        if (message.buildId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.buildId);
        /* uint64 size = 2; */
        if (message.size !== "0")
            writer.tag(2, WireType.Varint).uint64(message.size);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.debuginfo.v1alpha1.UploadResponse
 */
export const UploadResponse = new UploadResponse$Type();
/**
 * @generated ServiceType for protobuf service parca.debuginfo.v1alpha1.DebugInfoService
 */
export const DebugInfoService = new ServiceType("parca.debuginfo.v1alpha1.DebugInfoService", [
    { name: "Exists", options: {}, I: ExistsRequest, O: ExistsResponse },
    { name: "Upload", clientStreaming: true, options: {}, I: UploadRequest, O: UploadResponse }
]);
