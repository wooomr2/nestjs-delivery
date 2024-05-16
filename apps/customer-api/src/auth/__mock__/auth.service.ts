export const AuthService = jest.fn().mockReturnValue({
  signup: jest.fn().mockResolvedValue(null),
  signin: jest.fn().mockResolvedValue(null),
  logout: jest.fn().mockResolvedValue(null),
  tokenRefresh: jest.fn().mockResolvedValue({
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
  }),
})
