/* eslint-disable lines-between-class-members */
import axios from 'axios';

export class PromotionService {
  static async registerPromotion(request: { email: string; name: string }) {
    try {
      const url = String(process.env.NEXT_PUBLIC_API_BACKEND_PROMOTIONS);
      const { data } = await axios.post(url, request);
      return data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error?.response?.data) {
        throw new Error(error?.response?.data?.message || 'Server Error');
      }
      throw new Error(error.message);
    }
  }
  static async exchangePromotion(request: { email: string; code: string }) {
    try {
      const url = String(process.env.NEXT_PUBLIC_API_BACKEND_PROMOTIONS);
      const { data } = await axios.patch(url, request);
      return data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error?.response?.data) {
        throw new Error(error?.response?.data?.message || 'Server Error');
      }
      throw new Error(error.message);
    }
  }
  static async listPromotions(request: { status?: string }) {
    try {
      const queryParams = new URLSearchParams(request);
      const url = String(process.env.NEXT_PUBLIC_API_BACKEND_PROMOTIONS);
      const { data } = await axios.get(`${url}?${queryParams}`);
      return data.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error?.response?.data) {
        throw new Error(error?.response?.data?.message || 'Server Error');
      }
      throw new Error(error.message);
    }
  }
}
