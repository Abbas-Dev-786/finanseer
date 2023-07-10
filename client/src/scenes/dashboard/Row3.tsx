import { useTheme, Box, Typography } from "@mui/material";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import DashboardBox from "@/components/DashboardBox";
import BoxHeader from "@/components/BoxHeader";

const Row3 = () => {
  const { palette } = useTheme();
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();

  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader title="List of products" sideText="124 products" />
      </DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
};

export default Row3;
