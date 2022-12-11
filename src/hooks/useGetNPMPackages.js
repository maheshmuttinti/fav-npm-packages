import { useState, useEffect, useCallback } from "react";
import { useQuery, useMutation } from "react-query";
import { getNPMPackages } from "../services/npmV2";

export const useGetNPMPackages = (packageName) => {
  const getNPMPackgesFunction = useCallback(async () => {
    console.log("changed the package Name", packageName);
    try {
      const response = await getNPMPackages(packageName);
      return response;
    } catch (error) {
      throw error;
    }
  }, [packageName]);
  const { isLoading, error, data } = useQuery(
    "npmPackagesData",
    getNPMPackgesFunction,
    { enabled: packageName }
  );

  return { isLoading, error, data };
};
