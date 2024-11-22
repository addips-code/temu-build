import { defineQuery } from "next-sanity";
import { CouponCode } from "./couponCode";
import { sanityFetch } from "../live";

export const getActiveSaleByCouponCode = async (couponCode: CouponCode) => {
  const ACTIVE_SALE_BY_COUPON_QUERY = defineQuery(`
        *[
            _type == "sale" 
            && isActive == true
            && couponCode == $couponCode
        ] | order(validFrom desc)
        // {
        //     _id,
        //     title,
        //     description,
        //     discountAmount,
        //     couponCode,
        //     validFrom,
        //     validUntil,
        //     isActive,}
        [0]
    `);

    try {
        const activeSale = await sanityFetch({
          query: ACTIVE_SALE_BY_COUPON_QUERY,
          params: {
            couponCode,
          },
        });

        return activeSale ? activeSale.data : null;
      } catch (error) {
        console.log("Error fetching active sale by coupon code", error);
        return null;
    }
};