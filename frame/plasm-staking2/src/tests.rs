//! Tests for the dapps-staking module.

#![cfg(test)]

use super::*;
use crate::mock::*;
use frame_support::assert_ok;
use pallet_balances::*;
use pallet_plasm_rewards::traits::ComputeTotalPayout;
use pallet_plasm_rewards::*;
use sp_runtime::DispatchError;
/*
#[test]
fn set_validators_works_for_root() {
    new_test_ext().execute_with(|| {
        advance_session();
        assert_eq!(Session::current_index(), 1);
        assert_eq!(
            Session::validators(),
            vec![VALIDATOR_A, VALIDATOR_B, VALIDATOR_C, VALIDATOR_D]
        );

        assert_ok!(PlasmStaking::set_validators(
            Origin::root(),
            vec![VALIDATOR_A, VALIDATOR_B, VALIDATOR_C]
        ));
        assert_eq!(
            PlasmStaking::validators_list(),
            vec![VALIDATOR_A, VALIDATOR_B, VALIDATOR_C]
        );
        for i in 1..10 {
            assert_eq!(Session::current_index(), i);
            assert_eq!(
                Session::validators(),
                vec![VALIDATOR_A, VALIDATOR_B, VALIDATOR_C, VALIDATOR_D]
            );
            advance_session();
        }

        advance_session();
        assert_eq!(
            Session::validators(),
            vec![VALIDATOR_A, VALIDATOR_B, VALIDATOR_C]
        );

        for i in 11..25 {
            assert_eq!(Session::current_index(), i);
            assert_eq!(
                Session::validators(),
                vec![VALIDATOR_A, VALIDATOR_B, VALIDATOR_C]
            );
            advance_session();
        }

        assert_ok!(PlasmStaking::set_validators(
            Origin::root(),
            vec![VALIDATOR_A, VALIDATOR_B]
        ));
        assert_eq!(PlasmStaking::validators_list(), vec![VALIDATOR_A, VALIDATOR_B]);

        for i in 25..30 {
            assert_eq!(Session::current_index(), i);
            assert_eq!(
                Session::validators(),
                vec![VALIDATOR_A, VALIDATOR_B, VALIDATOR_C]
            );
            advance_session();
        }

        advance_session();
        assert_eq!(Session::current_index(), 31);
        assert_eq!(Session::validators(), vec![VALIDATOR_A, VALIDATOR_B]);
    })
}

#[test]
fn root_calls_fails_for_user() {
    new_test_ext().execute_with(|| {
        let res = PlasmStaking::set_validators(Origin::signed(0), vec![]);
        assert_eq!(res, Err(DispatchError::BadOrigin));
    })
}

const SIX_HOURS: u64 = 6 * 60 * 60 * 1000;

#[test]
fn reward_to_validator_test() {
    new_test_ext().execute_with(|| {
        advance_session();
        assert_ok!(PlasmStaking::set_validators(
            Origin::root(),
            vec![
                VALIDATOR_A,
                VALIDATOR_B,
                VALIDATOR_C,
                VALIDATOR_D,
                VALIDATOR_E
            ]
        ));
        advance_era();
        assert_eq!(PlasmRewards::current_era().unwrap(), 1);
        assert_eq!(
            PlasmStaking::elected_validators(1),
            Some(vec![
                VALIDATOR_A,
                VALIDATOR_B,
                VALIDATOR_C,
                VALIDATOR_D,
                VALIDATOR_E
            ])
        );
        assert_eq!(
            Session::validators(),
            vec![VALIDATOR_A, VALIDATOR_B, VALIDATOR_C, VALIDATOR_D,]
        );
        advance_session();
        assert_eq!(
            PlasmStaking::elected_validators(1),
            Some(vec![
                VALIDATOR_A,
                VALIDATOR_B,
                VALIDATOR_C,
                VALIDATOR_D,
                VALIDATOR_E
            ])
        );
        assert_eq!(
            Session::validators(),
            vec![
                VALIDATOR_A,
                VALIDATOR_B,
                VALIDATOR_C,
                VALIDATOR_D,
                VALIDATOR_E
            ]
        );

        let pre_total_issuarance = Balances::total_issuance();

        let (a, _) = <mock::Test as pallet_plasm_rewards::Trait>::ComputeTotalPayout::compute(
            pre_total_issuarance,
            SIX_HOURS,
            0,
            0,
        );
        println!("pre_total:{}, a:{}", pre_total_issuarance, a);
        let positive_imbalance = PlasmStaking::reward_to_validators(&0, &a);
        assert_eq!(
            Balances::free_balance(&VALIDATOR_A),
            1_000_000_000_000_000_000 + a / 4
        );
        assert_eq!(
            Balances::free_balance(&VALIDATOR_B),
            1_000_000_000_000_000_000 + a / 4
        );
        assert_eq!(
            Balances::free_balance(&VALIDATOR_C),
            1_000_000_000_000_000_000 + a / 4
        );
        assert_eq!(
            Balances::free_balance(&VALIDATOR_D),
            1_000_000_000_000_000_000 + a / 4
        );
        assert_eq!(positive_imbalance, a);
        assert_eq!(Balances::total_issuance(), pre_total_issuarance + a);
    })
}

// The test will delete, when change the compute algorithm.
#[test]
fn first_reward_to_validator_test() {
    new_test_ext().execute_with(|| {
        advance_session();
        assert_ok!(PlasmStaking::set_validators(
            Origin::root(),
            vec![VALIDATOR_A, VALIDATOR_B,]
        ));
        advance_era();
        assert_eq!(PlasmRewards::current_era().unwrap(), 1);
        assert_eq!(
            <PlasmStaking as ComputeEraWithParam<EraIndex>>::compute(&1),
            2
        );

        assert_ok!(PlasmStaking::set_validators(
            Origin::root(),
            vec![
                VALIDATOR_A,
                VALIDATOR_B,
                VALIDATOR_C,
                VALIDATOR_D,
                VALIDATOR_E
            ]
        ));
        advance_era();
        assert_eq!(
            <PlasmStaking as ComputeEraWithParam<EraIndex>>::compute(&2),
            5
        );
    })
}
*/

#[test]
fn validate_works() {
    new_test_ext().execute_with(|| {
        assert_eq!(Session::current_index(), 0);
        let validator = Origin::signed(1);
        let stash = Origin::signed(2);
        assert_eq!(Balances::free_balance(1), 1000000000000000000);
        assert_eq!(Balances::free_balance(2), 1000000000000000000);
        assert_eq!(Balances::free_balance(3), 1000000000000000000);
        // from validator account lock up 1 milli PLM to pay rewards to stash account with set controller account as itself.
        assert_ok!(PlasmStaking::bond(
            validator.clone(),
            1,
            100_000_000_000_000,
            RewardDestination::Account(2)
        ));
        let pref = ValidatorPrefs {
            commission: Perbill::from_percent(10),
        };

        // validate in plasm network with commission of 10 percent with controller account
        assert_ok!(PlasmStaking::validate(validator, pref.clone()));

        // check whether the controller account keeps the preferences
        assert_eq!(PlasmStaking::validators(1), pref);

        // move to new era
        advance_session();
    })
}

#[test]
fn nominate_works() {
    new_test_ext().execute_with(|| {
        assert_eq!(Session::current_index(), 0);
        let validator = Origin::signed(1);
        let stash = Origin::signed(2);
        let nominator = Origin::signed(3);
        let nominator_stash = Origin::signed(5);

        assert_eq!(Balances::free_balance(1), 1000000000000000000);
        assert_eq!(Balances::free_balance(2), 1000000000000000000);
        assert_eq!(Balances::free_balance(3), 1000000000000000000);
        assert_eq!(Balances::free_balance(4), 1000000000000000000);

        // from validator account as stash account and lock up 100 milli PLM
        assert_ok!(PlasmStaking::bond(
            validator.clone(),
            1,
            100000000000000,
            RewardDestination::Account(2)
        ));
        let pref = ValidatorPrefs {
            commission: Perbill::from_percent(10),
        };

        assert_ok!(PlasmStaking::validate(validator, pref.clone()));

        assert_eq!(PlasmStaking::validators(1), pref);

        // from nominator account lock up 1 milli PLM to pay rewards to stash account with set controller account as itself.
        assert_ok!(PlasmStaking::bond(
            nominator.clone(),
            3,
            100_000_000_000_000,
            RewardDestination::Account(5)
        ));

        assert_ok!(PlasmStaking::nominate(nominator, vec![1u64]));

        assert_eq!(PlasmStaking::nominators(3).unwrap().targets, [1]);
        assert_eq!(PlasmStaking::nominators(3).unwrap().submitted_in, 0);
        assert_eq!(PlasmStaking::nominators(3).unwrap().suppressed, false);
    })
}

#[test]
fn reward_works() {}