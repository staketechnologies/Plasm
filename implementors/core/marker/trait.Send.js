(function() {var implementors = {};
implementors["pallet_custom_signatures"] = [{"text":"impl Send for EthereumSignature","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId&gt; Send for RawEvent&lt;AccountId&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::Call: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_plasm_rewards"] = [{"text":"impl&lt;N&gt; Send for FirstPlasmIncentive&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;N&gt; Send for CommunityRewards&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for SimpleComputeTotalPayout","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Send for MaintainRatioComputeTotalPayout&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for DefaultForDappsStaking&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for Releases","synthetic":true,"types":[]},{"text":"impl&lt;Moment&gt; Send for ActiveEraInfo&lt;Moment&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Moment: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ForDappsEraReward&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ForSecurityEraReward&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for HistoryDepth","synthetic":true,"types":[]},{"text":"impl Send for BondedEras","synthetic":true,"types":[]},{"text":"impl Send for CurrentEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ActiveEra&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ErasStartSessionIndex","synthetic":true,"types":[]},{"text":"impl Send for ForceEra","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Send for RawEvent&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Error&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_plasm_validator"] = [{"text":"impl&lt;T&gt; Send for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for UntreatedEra","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for ElectedValidators&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Validators&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Module&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Send for RawEvent&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["plasm_cli"] = [{"text":"impl Send for Extensions","synthetic":true,"types":[]},{"text":"impl Send for Cli","synthetic":true,"types":[]},{"text":"impl Send for Subcommand","synthetic":true,"types":[]}];
implementors["plasm_primitives"] = [{"text":"impl Send for ReporterAppCrypto","synthetic":true,"types":[]}];
implementors["plasm_rpc"] = [{"text":"impl&lt;C, F, P&gt; Send for LightDeps&lt;C, F, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for BabeDeps","synthetic":true,"types":[]},{"text":"impl&lt;B&gt; Send for GrandpaDeps&lt;B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C, P, SC, B&gt; Send for FullDeps&lt;C, P, SC, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;SC: Send,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["plasm_runtime"] = [{"text":"impl Send for HOLDERS","synthetic":true,"types":[]},{"text":"impl Send for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Send for Version","synthetic":true,"types":[]},{"text":"impl Send for RuntimeBlockLength","synthetic":true,"types":[]},{"text":"impl Send for RuntimeBlockWeights","synthetic":true,"types":[]},{"text":"impl Send for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Send for EpochDuration","synthetic":true,"types":[]},{"text":"impl Send for ExpectedBlockTime","synthetic":true,"types":[]},{"text":"impl Send for ReportLongevity","synthetic":true,"types":[]},{"text":"impl Send for IndexDeposit","synthetic":true,"types":[]},{"text":"impl Send for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl Send for MaxLocks","synthetic":true,"types":[]},{"text":"impl Send for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Send for TargetBlockFullness","synthetic":true,"types":[]},{"text":"impl Send for AdjustmentVariable","synthetic":true,"types":[]},{"text":"impl Send for MinimumMultiplier","synthetic":true,"types":[]},{"text":"impl Send for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Send for UncleGenerations","synthetic":true,"types":[]},{"text":"impl Send for SessionKeys","synthetic":true,"types":[]},{"text":"impl Send for DisabledValidatorsThreshold","synthetic":true,"types":[]},{"text":"impl Send for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Send for MaxScheduledPerBlock","synthetic":true,"types":[]},{"text":"impl Send for SessionsPerEra","synthetic":true,"types":[]},{"text":"impl Send for BondingDuration","synthetic":true,"types":[]},{"text":"impl Send for TombstoneDeposit","synthetic":true,"types":[]},{"text":"impl Send for DepositPerContract","synthetic":true,"types":[]},{"text":"impl Send for DepositPerStorageByte","synthetic":true,"types":[]},{"text":"impl Send for DepositPerStorageItem","synthetic":true,"types":[]},{"text":"impl Send for RentFraction","synthetic":true,"types":[]},{"text":"impl Send for SurchargeReward","synthetic":true,"types":[]},{"text":"impl Send for SignedClaimHandicap","synthetic":true,"types":[]},{"text":"impl Send for MaxDepth","synthetic":true,"types":[]},{"text":"impl Send for MaxValueSize","synthetic":true,"types":[]},{"text":"impl Send for DeletionWeightLimit","synthetic":true,"types":[]},{"text":"impl Send for DeletionQueueDepth","synthetic":true,"types":[]},{"text":"impl Send for MaxCodeSize","synthetic":true,"types":[]},{"text":"impl Send for SessionDuration","synthetic":true,"types":[]},{"text":"impl Send for ImOnlineUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Send for OffencesWeightSoftLimit","synthetic":true,"types":[]},{"text":"impl Send for EcdsaUnsignedPriority","synthetic":true,"types":[]},{"text":"impl Send for NickReservationFee","synthetic":true,"types":[]},{"text":"impl Send for MinNickLength","synthetic":true,"types":[]},{"text":"impl Send for MaxNickLength","synthetic":true,"types":[]},{"text":"impl Send for GasWeightMapping","synthetic":true,"types":[]},{"text":"impl Send for ChainId","synthetic":true,"types":[]},{"text":"impl Send for TransactionConverter","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Send for EthereumFindAuthor&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for BlockGasLimit","synthetic":true,"types":[]},{"text":"impl Send for Runtime","synthetic":true,"types":[]},{"text":"impl Send for Event","synthetic":true,"types":[]},{"text":"impl !Send for Origin","synthetic":true,"types":[]},{"text":"impl Send for OriginCaller","synthetic":true,"types":[]},{"text":"impl Send for PalletInfo","synthetic":true,"types":[]},{"text":"impl Send for Call","synthetic":true,"types":[]},{"text":"impl Send for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Send for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block:&nbsp;BlockT, C:&nbsp;CallApiAt&lt;Block&gt;&gt; Send for RuntimeApiImpl&lt;Block, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C::StateBackend: StateBackend&lt;HashFor&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()