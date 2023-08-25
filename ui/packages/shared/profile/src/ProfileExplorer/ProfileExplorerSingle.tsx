// Copyright 2022 The Parca Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {QueryServiceClient} from '@parca/client';
import {Card} from '@parca/components';
import type {NavigateFunction} from '@parca/utilities';

import {ProfileSelection, ProfileViewWithData} from '..';
import ProfileSelector, {QuerySelection} from '../ProfileSelector';

interface ProfileExplorerSingleProps {
  queryClient: QueryServiceClient;
  query: QuerySelection;
  selectQuery: (query: QuerySelection) => void;
  selectProfile: (source: ProfileSelection) => void;
  profile: ProfileSelection | null;
  compareProfile: () => void;
  navigateTo: NavigateFunction;
}

const ProfileExplorerSingle = ({
  queryClient,
  query,
  selectQuery,
  selectProfile,
  profile,
  compareProfile,
  navigateTo,
}: ProfileExplorerSingleProps): JSX.Element => {
  return (
    <>
      <Card className="px-6 py-4">
        <ProfileSelector
          queryClient={queryClient}
          querySelection={query}
          selectQuery={selectQuery}
          selectProfile={selectProfile}
          closeProfile={() => {}} // eslint-disable-line @typescript-eslint/no-empty-function
          profileSelection={profile}
          comparing={false}
          onCompareProfile={compareProfile}
          enforcedProfileName={''} // TODO
        />
      </Card>
      {profile != null ? (
        <div className="mt-2">
          <Card className="px-6 py-4">
            <ProfileViewWithData
              queryClient={queryClient}
              profileSource={profile.ProfileSource()}
              navigateTo={navigateTo}
            />
          </Card>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfileExplorerSingle;
