import { System, Protobuf, authority } from "@koinos/sdk-as";
import { token } from "./proto/token";

export class Token {
  name(args: token.name_arguments): token.string_object {
    // YOUR CODE HERE

    const res = new token.string_object();
    // res.value = ;

    return res;
  }

  symbol(args: token.symbol_arguments): token.string_object {
    // YOUR CODE HERE

    const res = new token.string_object();
    // res.value = ;

    return res;
  }

  decimals(args: token.decimals_arguments): token.uint32_object {
    // YOUR CODE HERE

    const res = new token.uint32_object();
    // res.value = ;

    return res;
  }

  total_supply(args: token.total_supply_arguments): token.uint64_object {
    // YOUR CODE HERE

    const res = new token.uint64_object();
    // res.value = ;

    return res;
  }

  max_supply(args: token.max_supply_arguments): token.uint64_object {
    // YOUR CODE HERE

    const res = new token.uint64_object();
    // res.value = ;

    return res;
  }

  balance_of(args: token.balance_of_arguments): token.uint64_object {
    // const owner = args.owner;

    // YOUR CODE HERE

    const res = new token.uint64_object();
    // res.value = ;

    return res;
  }

  transfer(args: token.transfer_arguments): token.empty_message {
    // const from = args.from;
    // const to = args.to;
    // const value = args.value;

    // YOUR CODE HERE

    const res = new token.empty_message();

    return res;
  }

  mint(args: token.mint_arguments): token.empty_message {
    // const to = args.to;
    // const value = args.value;

    // YOUR CODE HERE

    const res = new token.empty_message();

    return res;
  }

  burn(args: token.burn_arguments): token.empty_message {
    // const from = args.from;
    // const value = args.value;

    // YOUR CODE HERE

    const res = new token.empty_message();

    return res;
  }

  approve(args: token.approve_arguments): token.empty_message {
    // const owner = args.owner;
    // const spender = args.spender;
    // const value = args.value;

    // YOUR CODE HERE

    const res = new token.empty_message();

    return res;
  }

  allowance(args: token.allowance_arguments): token.uint64_object {
    // const owner = args.owner;
    // const spender = args.spender;

    // YOUR CODE HERE

    const res = new token.uint64_object();
    // res.value = ;

    return res;
  }

  update_owner(args: token.update_owner_arguments): token.empty_message {
    // const new_owner = args.new_owner;

    // YOUR CODE HERE

    const res = new token.empty_message();

    return res;
  }

  get_info(args: token.get_info_arguments): token.info_object {
    // YOUR CODE HERE

    const res = new token.info_object();
    // res.name = ;
    // res.symbol = ;
    // res.decimals = ;
    // res.supply = ;
    // res.max_supply = ;
    // res.owner = ;

    return res;
  }
}
