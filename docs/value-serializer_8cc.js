var value_serializer_8cc =
[
    [ "EXIT_DCHECK", "value-serializer_8cc.html#a62178cf41e1b325f4e5ecd42e82c3715", null ],
    [ "ITERATION_SHIFTED", "value-serializer_8cc.html#ac9ea13a8ca1f3dcf6bbe8ffc95f8199b", null ],
    [ "READ_NEXT_ERROR_TAG", "value-serializer_8cc.html#a29e255491b1ce9082ca8c748f1f6ea97", null ],
    [ "TYPED_ARRAY_CASE", "value-serializer_8cc.html#a572dd685ddbfe9f50630f494b10dc032", null ],
    [ "TYPED_ARRAY_CASE", "value-serializer_8cc.html#a572dd685ddbfe9f50630f494b10dc032", null ],
    [ "SerializationTag", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1", [
      [ "kVersion", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a2047375d501cf789651332e8d3c985cc", null ],
      [ "kPadding", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a3cb795aa4472ac474bc8fb791cb24828", null ],
      [ "kVerifyObjectCount", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1ab6c102c2028918fa567027fca8e10034", null ],
      [ "kTheHole", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1aae331734f756845aa8879f14c7537d9c", null ],
      [ "kUndefined", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a7934d40c7c17315d892e8d5d745b1c66", null ],
      [ "kNull", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1af2655c2dee87cb9b0646f678a630394b", null ],
      [ "kTrue", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a66e2fa9ba4f5420341b16f9d6365f428", null ],
      [ "kFalse", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1af564c2bfece5a7928f8860f983c50098", null ],
      [ "kInt32", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a10c09f8bff3c372f21cd8a13e01ae941", null ],
      [ "kUint32", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1af5fca11a36e986e3623193c5cccc4f39", null ],
      [ "kDouble", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a7fb3efa35444cd88d5a31dc125ca9c28", null ],
      [ "kBigInt", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1ae3b98fe688fb02e30ca8070ac3a3cd6d", null ],
      [ "kUtf8String", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1ad641d893eb35e2063b64f6644f33eba0", null ],
      [ "kOneByteString", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a7df1edaf48fba6b65d441238fd17eded", null ],
      [ "kTwoByteString", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a4ecbf99566f5078ee0c594a3556ac87e", null ],
      [ "kObjectReference", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1ad70b2905923f1254893aa3cab1b5ed03", null ],
      [ "kBeginJSObject", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a90b3555e53f2d2181ee96124e21069a1", null ],
      [ "kEndJSObject", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1aff78dbebce2d21ce7539a9cd46b138ec", null ],
      [ "kBeginSparseJSArray", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a293eccf67427be129a0fd6ad15a76152", null ],
      [ "kEndSparseJSArray", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1aa4b176976b6da17dbd8d0273463fd27b", null ],
      [ "kBeginDenseJSArray", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a2a08fc16618498c564c8c61a599fe008", null ],
      [ "kEndDenseJSArray", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a207da050f7d286873398a6e36bf89750", null ],
      [ "kDate", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a3d1c7d2768a21424ab8f766e95e07d3e", null ],
      [ "kTrueObject", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a6d5be1b4ee61961afb47f4a2ae35950d", null ],
      [ "kFalseObject", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1af6ca33fd9ad2767f7ec34241c40e7666", null ],
      [ "kNumberObject", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1ade0b0726d65a624f6fd75329d6726cff", null ],
      [ "kBigIntObject", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a42de89614f2098aa1b1d462f54851489", null ],
      [ "kStringObject", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1aafcc50ca5dd6741efa11c72c3569e745", null ],
      [ "kRegExp", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a2255600f1a81589d2b61366d8fede403", null ],
      [ "kBeginJSMap", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a886b97bb1ec8e8ba0775dbdea21a113a", null ],
      [ "kEndJSMap", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a2e90dd2d8333e2eb4d86960049410e3d", null ],
      [ "kBeginJSSet", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a961c9d5a8ee537dd3504fc016a52d73e", null ],
      [ "kEndJSSet", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a4b48dc643909a0fa44993d05c5a2f028", null ],
      [ "kArrayBuffer", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a5680ee83442ecc6ca243bf839adf6223", null ],
      [ "kResizableArrayBuffer", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a1daf96308f7c3bc44e0e238a1d0881b2", null ],
      [ "kArrayBufferTransfer", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a8f577c764625f2324f3a1eb54d25426d", null ],
      [ "kArrayBufferView", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a0ec35f44fa7fc39ad505c413fbc327d5", null ],
      [ "kSharedArrayBuffer", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1aaa30cc986ab0532a145670aef16ec027", null ],
      [ "kSharedObject", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a4fd46643aa67060d56fccf056d588859", null ],
      [ "kWasmModuleTransfer", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a926e3bdc8a1e10d2f7517f9b2b7de094", null ],
      [ "kHostObject", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a896ee6cec1fc0d9c4a4aecbd02442aa5", null ],
      [ "kWasmMemoryTransfer", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1ae9596afa187423cca36ecfa558a41a06", null ],
      [ "kError", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1ae3587c730cc1aa530fa4ddc9c4204e97", null ],
      [ "kLegacyReservedMessagePort", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a7a583eb6b730c5b1ff3466d30a1e238c", null ],
      [ "kLegacyReservedBlob", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a41c75e9049ed665c256b3471dc3725a8", null ],
      [ "kLegacyReservedBlobIndex", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1aa771ced1a806ee21bd76931c7cff4e71", null ],
      [ "kLegacyReservedFile", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a84425aa0870f3af8e528e52beaa5d8de", null ],
      [ "kLegacyReservedFileIndex", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a8f86741a1c8503642af8056f4b034a23", null ],
      [ "kLegacyReservedDOMFileSystem", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1abc0472d250a9d1d743f1669b6f3896aa", null ],
      [ "kLegacyReservedFileList", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1aa05b1ca1818ec4976b2a3fc6afee0dd4", null ],
      [ "kLegacyReservedFileListIndex", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a1a4e056698605f9269eb319ae7e319e4", null ],
      [ "kLegacyReservedImageData", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a5076f8d986abeebdf19ab9bd1bc0e011", null ],
      [ "kLegacyReservedImageBitmap", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1aa0635e75144de68f251ee52c3a6ccf24", null ],
      [ "kLegacyReservedImageBitmapTransfer", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a88bde816d9a4c9601834fb2fcebd36ae", null ],
      [ "kLegacyReservedOffscreenCanvas", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1ade0d70c3455c6b1dc097db69aa9797e6", null ],
      [ "kLegacyReservedCryptoKey", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1a6a2a35799df1821504273a9c0d3a7c8d", null ],
      [ "kLegacyReservedRTCCertificate", "value-serializer_8cc.html#a482944934a1ccec1124aff7156b0efa1ae40f5f4dfe11c279323c0d6dc30ec442", null ]
    ] ],
    [ "BytesNeededForVarint", "value-serializer_8cc.html#a4823ab1627a5d1bdee29c2af87f1612e", null ],
    [ "CommitProperties", "value-serializer_8cc.html#af9c167f2d6a30479965aee1819bdc2a5", null ],
    [ "IsValidObjectKey", "value-serializer_8cc.html#ace61e3e615a5ecbd3be129bc2d11e697", null ],
    [ "SetPropertiesFromKeyValuePairs", "value-serializer_8cc.html#ae7a945ce78dd933cc125d18cc7a549d9", null ],
    [ "kLatestVersion", "value-serializer_8cc.html#ae8bf225ed6b7de41cabc7c1596daf0d9", null ]
];