var register_allocator_8h =
[
    [ "v8::internal::compiler::LifetimePosition", "classv8_1_1internal_1_1compiler_1_1LifetimePosition.html", "classv8_1_1internal_1_1compiler_1_1LifetimePosition" ],
    [ "v8::internal::compiler::RegisterAllocationData", "classv8_1_1internal_1_1compiler_1_1RegisterAllocationData.html", "classv8_1_1internal_1_1compiler_1_1RegisterAllocationData" ],
    [ "v8::internal::compiler::RegisterAllocationData::PhiMapValue", "classv8_1_1internal_1_1compiler_1_1RegisterAllocationData_1_1PhiMapValue.html", "classv8_1_1internal_1_1compiler_1_1RegisterAllocationData_1_1PhiMapValue" ],
    [ "v8::internal::compiler::RegisterAllocationData::DelayedReference", "structv8_1_1internal_1_1compiler_1_1RegisterAllocationData_1_1DelayedReference.html", "structv8_1_1internal_1_1compiler_1_1RegisterAllocationData_1_1DelayedReference" ],
    [ "v8::internal::compiler::UseInterval", "classv8_1_1internal_1_1compiler_1_1UseInterval.html", "classv8_1_1internal_1_1compiler_1_1UseInterval" ],
    [ "v8::internal::compiler::UsePosition", "classv8_1_1internal_1_1compiler_1_1UsePosition.html", "classv8_1_1internal_1_1compiler_1_1UsePosition" ],
    [ "v8::internal::compiler::UsePosition::Ordering", "structv8_1_1internal_1_1compiler_1_1UsePosition_1_1Ordering.html", "structv8_1_1internal_1_1compiler_1_1UsePosition_1_1Ordering" ],
    [ "v8::internal::compiler::DoubleEndedSplitVector< T >", "classv8_1_1internal_1_1compiler_1_1DoubleEndedSplitVector.html", "classv8_1_1internal_1_1compiler_1_1DoubleEndedSplitVector" ],
    [ "v8::internal::compiler::LiveRange", "classv8_1_1internal_1_1compiler_1_1LiveRange.html", "classv8_1_1internal_1_1compiler_1_1LiveRange" ],
    [ "v8::internal::compiler::LiveRangeOrdering", "structv8_1_1internal_1_1compiler_1_1LiveRangeOrdering.html", "structv8_1_1internal_1_1compiler_1_1LiveRangeOrdering" ],
    [ "v8::internal::compiler::LiveRangeBundle", "classv8_1_1internal_1_1compiler_1_1LiveRangeBundle.html", "classv8_1_1internal_1_1compiler_1_1LiveRangeBundle" ],
    [ "v8::internal::compiler::TopLevelLiveRange", "classv8_1_1internal_1_1compiler_1_1TopLevelLiveRange.html", "classv8_1_1internal_1_1compiler_1_1TopLevelLiveRange" ],
    [ "v8::internal::compiler::PrintableLiveRange", "structv8_1_1internal_1_1compiler_1_1PrintableLiveRange.html", "structv8_1_1internal_1_1compiler_1_1PrintableLiveRange" ],
    [ "v8::internal::compiler::SpillRange", "classv8_1_1internal_1_1compiler_1_1SpillRange.html", "classv8_1_1internal_1_1compiler_1_1SpillRange" ],
    [ "v8::internal::compiler::ConstraintBuilder", "classv8_1_1internal_1_1compiler_1_1ConstraintBuilder.html", "classv8_1_1internal_1_1compiler_1_1ConstraintBuilder" ],
    [ "v8::internal::compiler::LiveRangeBuilder", "classv8_1_1internal_1_1compiler_1_1LiveRangeBuilder.html", "classv8_1_1internal_1_1compiler_1_1LiveRangeBuilder" ],
    [ "v8::internal::compiler::BundleBuilder", "classv8_1_1internal_1_1compiler_1_1BundleBuilder.html", "classv8_1_1internal_1_1compiler_1_1BundleBuilder" ],
    [ "v8::internal::compiler::RegisterAllocator", "classv8_1_1internal_1_1compiler_1_1RegisterAllocator.html", "classv8_1_1internal_1_1compiler_1_1RegisterAllocator" ],
    [ "v8::internal::compiler::LinearScanAllocator", "classv8_1_1internal_1_1compiler_1_1LinearScanAllocator.html", "classv8_1_1internal_1_1compiler_1_1LinearScanAllocator" ],
    [ "v8::internal::compiler::OperandAssigner", "classv8_1_1internal_1_1compiler_1_1OperandAssigner.html", "classv8_1_1internal_1_1compiler_1_1OperandAssigner" ],
    [ "v8::internal::compiler::ReferenceMapPopulator", "classv8_1_1internal_1_1compiler_1_1ReferenceMapPopulator.html", "classv8_1_1internal_1_1compiler_1_1ReferenceMapPopulator" ],
    [ "v8::internal::compiler::LiveRangeConnector", "classv8_1_1internal_1_1compiler_1_1LiveRangeConnector.html", "classv8_1_1internal_1_1compiler_1_1LiveRangeConnector" ],
    [ "RangeRegisterSmallMap", "register-allocator_8h.html#a4ce2fcbefe6277211363a694071ee908", null ],
    [ "UseIntervalVector", "register-allocator_8h.html#a50c24751e9a1f7167a17e8773285d637", null ],
    [ "UsePositionVector", "register-allocator_8h.html#ab585a243744ab53bde95e845d22ef4fc", null ],
    [ "GrowthDirection", "register-allocator_8h.html#a4295fbcb67c10e3c11e8096b2a80196d", [
      [ "kFront", "register-allocator_8h.html#a4295fbcb67c10e3c11e8096b2a80196da96efb8639cdf9832b378bbca64f39876", null ],
      [ "kFrontOrBack", "register-allocator_8h.html#a4295fbcb67c10e3c11e8096b2a80196da16c184104cb70148708809c7b531ec32", null ]
    ] ],
    [ "UsePositionHintType", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6", [
      [ "kNone", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6a35c3ace1970663a16e5c65baa5941b13", null ],
      [ "kOperand", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6aeb47da7176f8b65e54de790db431e5a6", null ],
      [ "kUsePos", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6a490008f4e3279e9344f2c2075bd1287e", null ],
      [ "kPhi", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6a7d8013544a8fe735b2731dee53244ba9", null ],
      [ "kUnresolved", "register-allocator_8h.html#aaf22dd277d797ea2a57d496631f034f6a8fae96c2c16a6e5bffe0ababb3ede10e", null ]
    ] ],
    [ "UsePositionType", "register-allocator_8h.html#a7b6df401819d405afa63acd8f105c5e2", [
      [ "kRegisterOrSlot", "register-allocator_8h.html#a7b6df401819d405afa63acd8f105c5e2a3a93ed4cbfb40b28ddb0f10c5648f246", null ],
      [ "kRegisterOrSlotOrConstant", "register-allocator_8h.html#a7b6df401819d405afa63acd8f105c5e2a982caa97dcc7823b3ebcf26f31c40a73", null ],
      [ "kRequiresRegister", "register-allocator_8h.html#a7b6df401819d405afa63acd8f105c5e2ab42cb54cb90a9fdf22549474de5e1578", null ],
      [ "kRequiresSlot", "register-allocator_8h.html#a7b6df401819d405afa63acd8f105c5e2a52ab9859ec308dbd0d198cce409b209d", null ]
    ] ],
    [ "operator<<", "register-allocator_8h.html#a4cc8ca2751d420ca6e57346723de0084", null ],
    [ "operator<<", "register-allocator_8h.html#a4343c6cb055ec2b4274edfb1ce50f3ec", null ]
];