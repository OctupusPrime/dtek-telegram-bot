import { db } from "@lib/db";
import { handler } from "@utils/promise";

interface AddAddressForm {
  user_id: number;
  name: string;
  street: string;
  house: string;
}

const getAllAddresses = (user_id: number) => {
  return handler(
    db.selectFrom("users").selectAll().where("user_id", "=", user_id).execute()
  );
};

const addAddress = (data: AddAddressForm) => {
  return handler(db.insertInto("users").values(data).executeTakeFirst());
};

const updateAddress = (table_id: number, data: Partial<AddAddressForm>) => {
  return handler(
    db
      .updateTable("users")
      .set(data)
      .where("id", "=", table_id)
      .executeTakeFirst()
  );
};

const deleteAddress = (table_id: number) => {
  return handler(
    db.deleteFrom("users").where("id", "=", table_id).executeTakeFirst()
  );
};

export { getAllAddresses, addAddress, updateAddress, deleteAddress };
