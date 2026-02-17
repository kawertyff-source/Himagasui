export class DomainExpansionSystem {
  activate(user) {
    user.isInvincible = true;
    setTimeout(() => {
      user.isInvincible = false;
    }, 10000);
  }
}
