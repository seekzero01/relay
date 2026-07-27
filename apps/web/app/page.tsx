/*
await authClient.signOut();
await authClient.revokeSessions();

await authClient.changePassword({
  currentPassword,
  newPassword,
  revokeOtherSessions: true, // built-in — current session preserved automatically
});
 */


export default function Home() {
  return (
    <div>Home</div>
  );
}
